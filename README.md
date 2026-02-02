# Mallu Club (Static Website)

This repo is a **static, production-ready landing site** for Mallu Club.

## Run locally

From the project folder:

```bash
py -m http.server 5174
```

Open:
- `http://localhost:5174/index.html`

## Production settings (already wired)

- **Canonical**: `https://malludiscord.shop/`
- **Robots**: `robots.txt` includes `Sitemap: https://malludiscord.shop/sitemap.xml`
- **Sitemap**: `sitemap.xml` uses absolute URLs for:
  - `/`
  - `/privacy-policy.html`
  - `/terms.html`
- **OpenGraph/Twitter image**: `https://malludiscord.shop/hero.webp`
- **Discord invite**: `https://discord.gg/5CzssQQZeu`

## Deploy

Upload the files to any static host (Netlify / Vercel / GitHub Pages / Cloudflare Pages / cPanel).

Make sure:
- `hero.webp` and `logo.png` are at the site root
- `site.webmanifest`, `robots.txt`, and `sitemap.xml` are also at the site root

