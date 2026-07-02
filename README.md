# Mallu Club (Static Website)

Production-ready landing site for [Mallu Club](https://malludiscord.shop/) — Kerala's Malayalam Discord community.

## Project structure

```
├── index.html              # Home page
├── about.html              # About Mallu Club
├── voice-chat.html         # Voice chat hangout guide
├── how-to-join.html        # Join instructions (HowTo schema)
├── faq.html                # FAQ page
├── community-rules.html    # Community guidelines
├── for-nris.html           # NRIs & Gulf Malayalis
├── kerala-discord-server.html    # SEO: Kerala Discord
├── malayalam-discord-server.html # SEO: Malayalam Discord
├── privacy-policy.html     # Privacy policy
├── terms.html              # Terms of service
├── css/
│   └── styles.css          # Shared styles
├── js/
│   └── main.js             # Navigation & UI behavior
├── logo.png                # Site logo & favicon
├── llms.txt                # AI-readable site summary (llmstxt.org)
├── llms-full.txt           # Extended content for AI crawlers
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Run locally

From the project folder:

```bash
py -m http.server 5174
```

Open [http://localhost:5174/](http://localhost:5174/)

## Production settings

| Setting | Value |
|---------|-------|
| Canonical URL | `https://malludiscord.shop/` |
| Discord invite | `https://discord.gg/pnkGM8q9VA` |
| OpenGraph image | `https://malludiscord.shop/hero.webp` |
| Sitemap | `https://malludiscord.shop/sitemap.xml` |
| AI summary | `https://malludiscord.shop/llms.txt` |

## AI / LLM discoverability

The site includes optimizations so AI assistants (ChatGPT, Claude, Perplexity, Gemini, etc.) can find and cite Mallu Club accurately:

- **`llms.txt`** — concise machine-readable summary ([llmstxt.org](https://llmstxt.org/) format)
- **`llms-full.txt`** — full FAQ, facts, and citation guidance
- **`robots.txt`** — explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and other AI crawlers
- **JSON-LD** — Organization, FAQPage, ItemList (key facts), JoinAction, and Speakable markup on the homepage

## Deploy

Upload all files to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, cPanel).

Ensure these are at the site root:

- `logo.png`
- `hero.webp` (recommended for social sharing previews)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`
- `llms.txt`, `llms-full.txt`

## Live preview

Deployed at [malluclub-html.vercel.app](https://malluclub-html.vercel.app)
