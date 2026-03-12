(function() {
  'use strict';

  var client = ZAFClient.init();

  // ———————————————————————————————————————————————————————————————————————
  // AI PROMPT & RULES — Edit these to control how the AI drafts replies
  // ———————————————————————————————————————————————————————————————————————
  var AI_SYSTEM_PROMPT = 'You are a highly professional, efficient, and formal customer support assistant for a healthcare/medical company. ' +
  'Your primary users are Healthcare Providers (HCPs), including doctors, nurses, and clinic administrators. ' +
  'Rules: Use a respectful, clinical, and precise tone. Keep it tight and concise—HCPs are busy, so skip unnecessary fluff or pleasantries. ' +
  'Assist users with requesting medical samples, connecting with sales reps, and inquiring about medical services. ' +
  'Strict Constraints: 1. Do NOT provide pricing, discounts, or cost estimates. Offer to connect them with a sales rep instead. ' +
  '2. Do NOT provide medical advice, diagnoses, or off-label use recommendations. ' +
  '3. If a user mentions a side effect or adverse event, stop and direct them to the official reporting channel. ' +
  '4. Do not guess; ask concise follow-up questions if a request is ambiguous. ' +
  'Use the provided Internal Knowledge Base text as your source of truth when answering. Base your reply on that content when relevant; do not invent policies or procedures. ' +
  'The Knowledge Base may include the Product Guide, skincare resources, and brand-specific information. Use any relevant article to answer—whether from the main KB or from the Product Guide / skincare resources. ' +
  'If the customer asks vaguely (e.g. "skincare things" or "product info"), ask for specifics such as which brands they want; then the agent can send that reply, and when the customer responds with brands, the next draft can pull from the skincare resources for those brands. ' +
  'When specific brands or topics are mentioned, use the provided KB content to find and return the relevant information. ' +
  'Based on the ticket conversation and the Knowledge Base, draft a single reply body the agent can send to the HCP. ' +
  'Reply ONLY with the message body—no subject line, no quotation marks, and no meta-commentary. ' +
  'After the reply body, you MUST also output a consolidated checklist of next steps for the AGENT (not for the customer). ' +
  'Format: output the reply body first, then on a new line write exactly this delimiter (with nothing else on the line): ---NEXT STEPS FOR AGENT--- then on the following lines list 3-6 concrete next steps the agent should take (e.g. attach form, send sample request, follow up in X days, escalate to Y). Use bullets or numbers. This checklist is for the agent only and must not appear in the customer-facing reply.';

  // KB: Optimized path uses pre-built chunks + embeddings (run scripts/build-kb.mjs); fallback is full KB_markup file.
  var KB_MARKUP_PATH = 'KB_Markup.md';
  var KB_CHUNKS_PATH = 'kb_chunks.json';
  var KB_TOP_CHUNKS = 8;
  var EMBEDDING_MODEL = 'text-embedding-3-small';

  var AI_USER_PROMPT_PREFIX = 'Ticket context:\n\n';
  var AI_USER_PROMPT_SUFFIX = '\n\nDraft the customer-facing reply, then after the delimiter ---NEXT STEPS FOR AGENT--- list the next steps checklist for the agent.';

  var DELIMITER_NEXT_STEPS = '---NEXT STEPS FOR AGENT---';

  var selectors = {
    draftBtn: document.getElementById('draft-btn'),
    btnLabel: document.querySelector('.btn-label'),
    btnLoading: document.querySelector('.btn-loading'),
    summaryBtn: document.getElementById('summary-btn'),
    summaryLabel: document.querySelector('.summary-label'),
    summaryLoading: document.querySelector('.summary-loading'),
    errorMsg: document.getElementById('error-msg'),
    summarySection: document.getElementById('summary-section'),
    summaryContent: document.getElementById('summary-content'),
    nextStepsSection: document.getElementById('next-steps-section'),
    nextStepsContent: document.getElementById('next-steps-content')
  };

  function setLoading(loading) {
    selectors.draftBtn.disabled = loading;
    selectors.draftBtn.setAttribute('aria-busy', loading ? 'true' : 'false');
    if (selectors.btnLoading) {
      selectors.btnLoading.hidden = !loading;
    }
  }

  function setSummaryLoading(loading) {
    if (!selectors.summaryBtn) return;
    selectors.summaryBtn.disabled = loading;
    selectors.summaryBtn.setAttribute('aria-busy', loading ? 'true' : 'false');
    if (selectors.summaryLoading) {
      selectors.summaryLoading.hidden = !loading;
    }
  }

  function showError(message) {
    if (selectors.errorMsg) {
      selectors.errorMsg.textContent = message || '';
      selectors.errorMsg.hidden = !message;
    }
  }

  /**
   * Show the agent-only next steps checklist in the app UI. Converts plain text (bullets, newlines) to a simple list.
   */
  function showNextSteps(plainText) {
    if (!selectors.nextStepsSection || !selectors.nextStepsContent) return;
    var t = (plainText && plainText.trim()) || '';
    if (!t) {
      clearNextSteps();
      return;
    }
    var lines = t.split(/\n+/).map(function(line) {
      return line.replace(/^[\s\-*•]\s*|\d+\.\s*/g, '').trim();
    }).filter(Boolean);
    var html = lines.length ? '<ul><li>' + lines.map(function(line) {
      return escapeHtml(line);
    }).join('</li><li>') + '</li></ul>' : escapeHtml(t);
    selectors.nextStepsContent.innerHTML = html;
    selectors.nextStepsSection.hidden = false;
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function showSummary(summaryText) {
    if (!selectors.summarySection || !selectors.summaryContent) return;
    var t = (summaryText && summaryText.trim()) || '';
    if (!t) {
      clearSummary();
      return;
    }

    var lines = t.split(/\n+/).map(function(line) { return line.trim(); }).filter(Boolean);
    var htmlParts = [];
    var listItems = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var asItem = line.replace(/^[\s\-*•]\s*|\d+\.\s*/g, '').trim();
      var looksLikeBullet = /^[\s\-*•]\s+/.test(line) || /^\d+\.\s+/.test(line);
      if (looksLikeBullet && asItem) {
        listItems.push('<li>' + escapeHtml(asItem) + '</li>');
      } else {
        if (listItems.length) {
          htmlParts.push('<ul>' + listItems.join('') + '</ul>');
          listItems = [];
        }
        htmlParts.push('<p>' + escapeHtml(line) + '</p>');
      }
    }
    if (listItems.length) {
      htmlParts.push('<ul>' + listItems.join('') + '</ul>');
    }

    selectors.summaryContent.innerHTML = htmlParts.join('');
    selectors.summarySection.hidden = false;
  }

  function clearSummary() {
    if (selectors.summarySection) selectors.summarySection.hidden = true;
    if (selectors.summaryContent) selectors.summaryContent.innerHTML = '';
  }

  function clearNextSteps() {
    if (selectors.nextStepsSection) selectors.nextStepsSection.hidden = true;
    if (selectors.nextStepsContent) selectors.nextStepsContent.innerHTML = '';
  }

  function resizeForReadability() {
    // Ticket sidebar supports resizing height. Ignore errors if resize isn't available.
    return client.invoke('resize', { height: '520px' }).catch(function() {});
  }

  /**
   * Strip HTML tags from a string, leaving plain text. Handles common entities.
   */
  function stripHtml(html) {
    if (typeof html !== 'string' || !html.trim()) return '';
    var div = document.createElement('div');
    div.innerHTML = html;
    var text = (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
    return text;
  }

  /**
   * Load pre-built KB chunks (from scripts/build-kb.mjs). Returns null if file missing or invalid.
   */
  function loadKbChunks() {
    return fetch(KB_CHUNKS_PATH)
      .then(function(res) {
        if (!res || !res.ok) return null;
        return res.json();
      })
      .then(function(data) {
        if (!data || !Array.isArray(data.chunks) || !data.chunks.length) return null;
        return data;
      })
      .catch(function() {
        return null;
      });
  }

  /**
   * Load the full KB from the KB_markup file (fallback when kb_chunks.json is not used).
   */
  function loadKbMarkup() {
    return fetch(KB_MARKUP_PATH)
      .then(function(res) {
        if (!res || !res.ok) return '';
        return res.text();
      })
      .then(function(text) {
        if (typeof text !== 'string') return '';
        var trimmed = text.trim();
        if (!trimmed) return '';
        return trimmed;
      })
      .catch(function() {
        return '';
      });
  }

  /**
   * Call OpenAI Embeddings API (secure proxy). Returns array of numbers or rejects.
   */
  function callOpenAIEmbeddings(text) {
    if (!text || !String(text).trim()) return Promise.reject(new Error('Empty text for embedding'));
    var options = {
      url: 'https://api.openai.com/v1/embeddings',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        model: EMBEDDING_MODEL,
        input: String(text).trim().slice(0, 8000)
      }),
      headers: {
        'Authorization': 'Bearer {{setting.ai_api_key}}'
      },
      secure: true
    };
    return client.request(options).then(function(res) {
      var body = typeof res === 'string' ? JSON.parse(res) : res;
      var embedding = body.data && body.data[0] && body.data[0].embedding;
      if (!Array.isArray(embedding)) throw new Error('Invalid embedding response');
      return embedding;
    });
  }

  /**
   * Cosine similarity between two vectors (assumes same length). Returns value in [-1, 1].
   */
  function cosineSimilarity(a, b) {
    if (!a.length || a.length !== b.length) return 0;
    var dot = 0, na = 0, nb = 0;
    for (var i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      na += a[i] * a[i];
      nb += b[i] * b[i];
    }
    var denom = Math.sqrt(na) * Math.sqrt(nb);
    return denom ? dot / denom : 0;
  }

  /**
   * From loaded chunks index, return concatenated text of top-k chunks by similarity to queryEmbedding.
   */
  function getRelevantKbText(queryEmbedding, chunksData, topK) {
    if (!chunksData || !Array.isArray(chunksData.chunks)) return '';
    var chunks = chunksData.chunks;
    var scored = chunks.map(function(c) {
      return { text: c.text, score: cosineSimilarity(queryEmbedding, c.embedding || []) };
    });
    scored.sort(function(x, y) { return y.score - x.score; });
    var top = scored.slice(0, topK);
    return top.map(function(x) { return x.text; }).join('\n\n');
  }

  /**
   * Get KB text for the draft: use optimized chunks + retrieval if available, else full KB file.
   * queryText should be ticket subject + recent conversation (used to embed and retrieve relevant chunks).
   */
  function getKbTextForDraft(queryText) {
    return loadKbChunks().then(function(chunksData) {
      if (chunksData && queryText && String(queryText).trim()) {
        return callOpenAIEmbeddings(String(queryText).trim()).then(function(embedding) {
          return getRelevantKbText(embedding, chunksData, KB_TOP_CHUNKS);
        });
      }
      return loadKbMarkup();
    }).catch(function() {
      return loadKbMarkup();
    });
  }

  /**
   * Build a short query string from the ticket for embedding-based retrieval (subject + recent messages).
   */
  function getQueryTextFromTicket(ticket) {
    var parts = [];
    if (ticket.subject && ticket.subject.trim()) parts.push(ticket.subject.trim());
    if (ticket.conversation && ticket.conversation.length) {
      var lastN = 5;
      var start = Math.max(0, ticket.conversation.length - lastN);
      for (var i = start; i < ticket.conversation.length; i++) {
        var content = ticket.conversation[i].message && ticket.conversation[i].message.content != null
          ? ticket.conversation[i].message.content
          : '';
        if (typeof content === 'string' && content.trim()) parts.push(stripHtml(content));
      }
    }
    return parts.join(' ').replace(/\s+/g, ' ').trim().slice(0, 2000);
  }

  function buildConversationContext(conversation, description) {
    var parts = [];
    if (description) {
      parts.push('Initial ticket description:\n' + description);
    }
    if (conversation && conversation.length) {
      parts.push('Conversation:');
      conversation.forEach(function(entry) {
        var author = entry.author;
        var name = author && author.name ? author.name : 'Unknown';
        var role = author && author.role ? author.role : '';
        var label = role === 'agent' || role === 'admin' ? 'Agent' : 'Customer';
        var content = entry.message && entry.message.content != null ? entry.message.content : '';
        if (content) {
          parts.push(label + ' (' + name + '): ' + content);
        }
      });
    }
    return parts.join('\n\n');
  }

  function buildOpenAIMessages(context, kbText) {
    var userContent = AI_USER_PROMPT_PREFIX + context;
    if (kbText && kbText.trim()) {
      userContent += '\n\n--- Knowledge Base (full KB from KB_markup; use as source of truth) ---\n\n' + kbText.trim();
    }
    userContent += AI_USER_PROMPT_SUFFIX;
    return [
      { role: 'system', content: AI_SYSTEM_PROMPT },
      { role: 'user', content: userContent }
    ];
  }

  function fetchTicketData() {
    return client.get(['ticket.conversation', 'ticket.description', 'ticket.subject']).then(function(data) {
      return {
        conversation: (data && data['ticket.conversation']) || [],
        description: (data && data['ticket.description']) || '',
        subject: (data && data['ticket.subject']) || ''
      };
    });
  }

  function callOpenAI(messages) {
    var options = {
      url: 'https://api.openai.com/v1/chat/completions',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.6,
        max_tokens: 1400
      }),
      headers: {
        'Authorization': 'Bearer {{setting.ai_api_key}}'
      },
      secure: true
    };
    return client.request(options);
  }

  function buildSummaryMessages(context) {
    var systemPrompt = 'You are assisting a Zendesk support agent. Summarize the existing ticket conversation for the agent only. ' +
      'Output format must be:\n' +
      '1) A short high-level overview paragraph (1-3 sentences).\n' +
      '2) A section titled \"Requests:\" followed by a bulleted list where each bullet is a distinct request/question the customer asked for.\n' +
      'Do not include any customer-facing reply. Do not include internal tool instructions.';
    var userPrompt = 'Conversation:\n\n' + context + '\n\nCreate the summary now.';
    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];
  }

  function injectDraft(text) {
    return client.set('comment.text', text);
  }

  function onDraftClick() {
    showError('');
    clearSummary();
    clearNextSteps();
    setLoading(true);

    fetchTicketData()
      .then(function(ticket) {
        var context = buildConversationContext(ticket.conversation, ticket.description);
        if (!context || !context.trim()) {
          throw new Error('No ticket content found. Open a ticket with at least a description or conversation.');
        }
        var queryText = getQueryTextFromTicket(ticket);
        return getKbTextForDraft(queryText).then(function(kbText) {
          return { context: context, kbText: kbText };
        });
      })
      .then(function(payload) {
        var messages = buildOpenAIMessages(payload.context, payload.kbText);
        return callOpenAI(messages);
      })
      .then(function(response) {
        var body = typeof response === 'string' ? JSON.parse(response) : response;
        var choice = body.choices && body.choices[0];
        var text = choice && choice.message && choice.message.content ? choice.message.content.trim() : '';
        if (!text) {
          throw new Error('AI did not return any text.');
        }
        var replyForCustomer = text;
        var nextStepsForAgent = '';
        var delimIndex = text.indexOf(DELIMITER_NEXT_STEPS);
        if (delimIndex !== -1) {
          replyForCustomer = text.slice(0, delimIndex).trim();
          nextStepsForAgent = text.slice(delimIndex + DELIMITER_NEXT_STEPS.length).trim();
        }
        if (nextStepsForAgent) showNextSteps(nextStepsForAgent);
        if (nextStepsForAgent) resizeForReadability();
        return injectDraft(replyForCustomer);
      })
      .then(function() {
        setLoading(false);
      })
      .catch(function(err) {
        setLoading(false);
        var message = (err && err.message) || (err && err.responseText) || String(err);
        if (err && err.responseJSON && err.responseJSON.error && err.responseJSON.error.message) {
          message = err.responseJSON.error.message;
        }
        showError('Failed to generate draft: ' + message);
      });
  }

  function onSummaryClick() {
    showError('');
    clearNextSteps();
    clearSummary();
    setSummaryLoading(true);

    fetchTicketData()
      .then(function(ticket) {
        var context = buildConversationContext(ticket.conversation, ticket.description);
        if (!context || !context.trim()) {
          throw new Error('No ticket content found to summarize.');
        }
        return callOpenAI(buildSummaryMessages(context));
      })
      .then(function(response) {
        var body = typeof response === 'string' ? JSON.parse(response) : response;
        var choice = body.choices && body.choices[0];
        var text = choice && choice.message && choice.message.content ? choice.message.content.trim() : '';
        if (!text) {
          throw new Error('AI did not return a summary.');
        }
        showSummary(text);
        return resizeForReadability();
      })
      .then(function() {
        setSummaryLoading(false);
      })
      .catch(function(err) {
        setSummaryLoading(false);
        var message = (err && err.message) || (err && err.responseText) || String(err);
        if (err && err.responseJSON && err.responseJSON.error && err.responseJSON.error.message) {
          message = err.responseJSON.error.message;
        }
        showError('Failed to summarize: ' + message);
      });
  }

  if (selectors.draftBtn) {
    selectors.draftBtn.addEventListener('click', onDraftClick);
  }

  if (selectors.summaryBtn) {
    selectors.summaryBtn.addEventListener('click', onSummaryClick);
  }
})();
