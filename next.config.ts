import type { NextConfig } from 'next'

// Static export for Cloudflare Pages: the site has no server code, so it no
// longer needs a Node container behind a tunnel. next/image has no optimizer
// in a static export, hence `unoptimized`.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
