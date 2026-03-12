# AI Reply Draft – Zendesk Support app

Private Zendesk Support app that sits in the **ticket sidebar**. Agents click **"Draft AI Reply"** to have an AI draft a reply from the ticket conversation; the draft is inserted into the reply composer for review and sending.

- **Stack:** Zendesk Apps Framework (ZAF) v2, vanilla HTML/JS/CSS  
- **AI:** OpenAI Chat Completions API (key stored as a Zendesk secure setting, never in the browser)

## Files

| File | Purpose |
|------|--------|
| `manifest.json` | App config, `ticket_sidebar` location, secure `ai_api_key` parameter |
| `assets/iframe.html` | Sidebar UI (button + loading state) and ZAF script tag |
| `assets/app.css` | Styles for button and loading spinner |
| `assets/app.js` | ZAF client, ticket context, OpenAI request, inject draft into composer |
| `translations/en.json` | Required locale file for `defaultLocale: "en"` (validates and packages) |
| `.zcliignore` | Excludes `node_modules` and dev files from the app zip so validation succeeds |
| `assets/KB_Markup.md` | Full KB (markdown). Used when optimized chunks are not built. |
| `assets/kb_chunks.json` | Optional: pre-built chunk + embedding index for RAG (see below). |

## KB optimization (LangChain)

The app can use an **optimized** KB index so only **relevant chunks** are sent to the AI on each request (fewer tokens, better relevance).

1. **Build the index (once, or when the KB changes):**
   ```bash
   export OPENAI_API_KEY=your_openai_key
   npm run build:kb
   ```
   This uses **LangChain** (`@langchain/textsplitters` `MarkdownTextSplitter`) to chunk `assets/KB_Markup.md`, calls the **OpenAI Embeddings API** for each chunk, and writes `assets/kb_chunks.json`.

2. **Package the app:** Include `assets/kb_chunks.json` in the app zip (it is in `assets/`). Then validate/package as usual (`npx zcli apps:validate` / `npx zcli apps:package`).

3. **At runtime:** If `kb_chunks.json` is present, the app embeds the ticket context (subject + recent messages), finds the top‑k most similar chunks by cosine similarity, and sends only those to the chat API. If the file is missing, the app falls back to loading the full `KB_Markup.md`.

## Flow

1. Agent opens a ticket and clicks **"Draft AI Reply"** in the sidebar.
2. App loads ticket context via `client.get('ticket.conversation')` and `client.get('ticket.description')`.
3. App calls OpenAI with that context using `client.request()` and the secure `{{setting.ai_api_key}}` placeholder (Zendesk proxy injects the key server-side).
4. Response text is written into the reply box with `client.set('comment.text', draft)`.
5. Agent reviews and sends (or edits) the reply.

## API key (no .env in the iframe)

The API key is **not** read from a `.env` file in the browser. It is stored as a **secure installation parameter** in Zendesk:

- In `manifest.json`, `parameters` includes `ai_api_key` with `"secure": true` and `"scopes": ["header"]`.
- When you **install** the app (see below), Zendesk prompts for the OpenAI API key and stores it encrypted.
- In `app.js`, the key is only referenced as `{{setting.ai_api_key}}` in the request headers; the Zendesk proxy substitutes the real value on the server, so it never appears in client-side code or dev tools.

If you prefer to keep the key in a `.env` file, you would need a small backend (e.g. serverless or Node/Python) that reads `OPENAI_API_KEY` from `.env`, exposes an endpoint, and the app would call that endpoint instead of OpenAI directly (and you could drop the secure parameter or use it for the backend URL).

## Package and install with ZCLI

### 1. Install ZCLI

**Option A – Local install (recommended, no sudo):**

From the app root, install ZCLI as a dev dependency and run it via `npx`:

```bash
cd /Users/tylercarty/zendesk_light_app
npm install
npx zcli --version   # confirm it works
```

Then use `npx zcli` instead of `zcli` in the steps below (e.g. `npx zcli apps:validate`, `npx zcli apps:package`, `npx zcli apps:run`). You can also use the npm scripts: `npm run zcli:validate`, `npm run zcli:package`, `npm run zcli:run`.

**Option B – Global install:**

Use the **scoped** package name (not `zcli`):

```bash
npm install -g @zendesk/zcli
```

If you see **`EPERM: operation not permitted`** when writing to `/usr/local/lib/node_modules`, run:

```bash
sudo npm install -g @zendesk/zcli
```

**Common terminal errors:**

| Error | Cause | Fix |
|-------|--------|-----|
| `404 Not Found - zcli` | Wrong package name | Use `@zendesk/zcli`, not `zcli` |
| `EPERM` / operation not permitted | No write access to global npm dir | Use Option A (local install) or `sudo npm install -g @zendesk/zcli` |
| `npm warn Unknown env config "devdir"` | Stale npm config | Harmless. To remove: `npm config delete devdir` |
| Deprecation warnings (glob, rimraf, etc.) | From ZCLI’s dependencies | Safe to ignore; install still succeeds |

### 2. Log in

ZCLI needs your **Zendesk subdomain**, **email**, and a **Zendesk API token** (the one used for the Support/Ticketing API, not Chat, Sell, or OAuth).

**Which API token to use**

Use the token from **Admin Center → Apps and integrations → APIs → API tokens**:

1. In Zendesk, open **Admin Center** (gear icon).
2. Go to **Apps and integrations** → **APIs** → **API tokens**.
3. Click **Add API token**, add a description (e.g. “ZCLI”), then **Save**.
4. Copy the token immediately (it’s only shown once) and store it securely.

This is the same token used for the [Zendesk Support/Ticketing API](https://developer.zendesk.com/documentation/ticketing/getting-started/making-requests-to-the-zendesk-api/). Do **not** use Chat API tokens, Sell API tokens, or OAuth access tokens.

**Log in with ZCLI**

Interactive (recommended):

```bash
npx zcli login -i
```

When prompted, enter your **subdomain** (e.g. `mycompany` for mycompany.zendesk.com), **email**, and the **API token** you created above. You do not need to append `/token` to your email—ZCLI does that for you.

Or use environment variables (e.g. for CI or if interactive login isn’t available):

```bash
export ZENDESK_SUBDOMAIN=mycompany
export ZENDESK_EMAIL=you@example.com
export ZENDESK_API_TOKEN=your_api_token_here
```

### 3. Validate the app

```bash
zcli apps:validate
```

(or `npm run zcli:validate`). Run from the app root (where `manifest.json` is).

### 4. Package the app

```bash
zcli apps:package
```

(or `npm run zcli:package`). This produces a zip in `dist/` that you can upload.

### 5. Install in Zendesk

**Option A – Upload in the UI**

1. In Zendesk: **Apps and integrations** → **Apps** → **Zendesk Support apps** → **Private**.
2. **Upload app** and choose the zip from `dist/`.
3. Click **Install** and follow the prompts. When asked, enter your **OpenAI API key** (this is stored as the secure `ai_api_key` setting).
4. Install the app in the desired account/sandbox.

**Option B – Install via ZCLI**

```bash
zcli apps:install dist/*.zip
```

Then in the Zendesk admin UI, open the app’s configuration and set the **AI API Key** (secure parameter) to your OpenAI API key.

### 6. Secure settings and local dev

The ZCLI **web server** (`zcli apps:run` or similar) does **not** support secure settings. So:

- You can run the app locally to check layout and flow, but the “Draft AI Reply” call to OpenAI will fail until the app is **installed** in a Zendesk instance and the secure `ai_api_key` is set.
- For full testing (including real AI drafts), **package**, **upload**, and **install** the app in Zendesk, then test from a real ticket.

## Customization

- **Model:** In `assets/app.js`, the request body uses `model: 'gpt-4o-mini'`. Change it to `gpt-4o` or another model if you prefer.
- **Prompt:** The system and user prompts are in `buildOpenAIMessages()` in `app.js`; edit those strings to change tone or instructions.
- **Whitelist:** If you call a different API (e.g. your own proxy), add that host to `domainWhitelist` in `manifest.json` and use its URL and headers in `app.js`.

## Requirements

- Zendesk Support with Apps enabled.
- OpenAI API key (stored as the app’s secure parameter in Zendesk).
- Network: Zendesk’s proxy will call `api.openai.com`; ensure your Zendesk environment can reach it (and that OpenAI allows requests from [Zendesk’s IPs](https://developer.zendesk.com/api-reference/ticketing/account-configuration/public_ips/) if you restrict by IP).
