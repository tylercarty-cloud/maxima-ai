#!/usr/bin/env node
/**
 * Build script: chunk KB_Markup.md with LangChain and create an embedding index
 * for optimized retrieval (RAG). Run: node scripts/build-kb.mjs
 * Requires: OPENAI_API_KEY in env, and assets/KB_Markup.md (or KB_Markup.md in project root).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MarkdownTextSplitter } from '@langchain/textsplitters';
import OpenAI from 'openai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const KB_INPUT = path.join(ROOT, 'assets', 'KB_Markup.md');
const KB_OUTPUT = path.join(ROOT, 'assets', 'kb_chunks.json');

const CHUNK_SIZE = 1200;
const CHUNK_OVERLAP = 200;
const EMBEDDING_MODEL = 'text-embedding-3-small';
const BATCH_SIZE = 50;

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('Set OPENAI_API_KEY in the environment to run this script.');
    process.exit(1);
  }

  let rawPath = KB_INPUT;
  if (!fs.existsSync(rawPath)) {
    rawPath = path.join(ROOT, 'KB_Markup.md');
  }
  if (!fs.existsSync(rawPath)) {
    console.error('KB file not found at assets/KB_Markup.md or KB_Markup.md');
    process.exit(1);
  }

  const markdown = fs.readFileSync(rawPath, 'utf8');
  if (!markdown.trim()) {
    console.error('KB file is empty.');
    process.exit(1);
  }

  console.log('Chunking markdown with LangChain MarkdownTextSplitter...');
  const splitter = new MarkdownTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  });
  const chunks = await splitter.splitText(markdown);
  console.log('Chunks:', chunks.length);

  const openai = new OpenAI({ apiKey });
  const chunksWithEmbeddings = [];

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const res = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: batch,
    });
    for (let j = 0; j < batch.length; j++) {
      const embedding = res.data[j]?.embedding;
      if (embedding) {
        chunksWithEmbeddings.push({ text: batch[j], embedding });
      }
    }
    console.log('Embedded', Math.min(i + BATCH_SIZE, chunks.length), '/', chunks.length);
  }

  const out = {
    model: EMBEDDING_MODEL,
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
    chunks: chunksWithEmbeddings,
  };
  fs.writeFileSync(KB_OUTPUT, JSON.stringify(out), 'utf8');
  console.log('Written to', KB_OUTPUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
