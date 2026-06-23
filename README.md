# Mallu Club (Static Website)

Production-ready landing site for [Mallu Club](https://malludiscord.shop/) — Kerala's Malayalam Discord community.

## Project structure

```
├── index.html              # Home page
├── privacy-policy.html     # Privacy policy
├── terms.html              # Terms of service
├── css/
│   └── styles.css          # Shared styles
├── js/
│   └── main.js             # Navigation & UI behavior
├── logo.png                # Site logo & favicon
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

## Deploy

Upload all files to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, cPanel).

Ensure these are at the site root:

- `logo.png`
- `hero.webp` (recommended for social sharing previews)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`

## Live preview

Deployed at [malluclub-html.vercel.app](https://malluclub-html.vercel.app)
