import type { MetadataRoute } from 'next'

// `force-static` for the same reason as sitemap.ts: a static export has no
// server to generate this per request.
export const dynamic = 'force-static'

// THIS DOES NOT REPLACE CLOUDFLARE'S MANAGED robots.txt — IT IS APPENDED TO IT.
// The zone serves a managed block of AI content-signal directives first, and
// what this file returns lands underneath. That is fine and it is the point:
// the only thing missing from the served file was a `Sitemap:` line, and a
// crawler reads the whole document.
//
// Checked in production on 2026-09-16: the served robots.txt was the managed
// content-signal preamble with no Sitemap line at all.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://miranda-ia.net.ar/sitemap.xml',
  }
}
