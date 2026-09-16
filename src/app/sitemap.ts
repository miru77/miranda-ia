import type { MetadataRoute } from 'next'

// `force-static` is required: `output: 'export'` in next.config.ts has no server
// to run this at request time, and without it the build fails instead of
// emitting sitemap.xml.
export const dynamic = 'force-static'

// ONE ENTRY, BECAUSE THERE IS ONE PAGE. The site is a single route with
// in-page anchors (#inicio, #sobre-mi, #proyectos, #contacto), and an anchor is
// not a URL Google indexes separately — listing them would be padding a sitemap
// with duplicates of the same document.
//
// The day this grows a second real route, it belongs here too.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miranda-ia.net.ar/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
