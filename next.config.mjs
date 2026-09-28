/** @type {import('next').NextConfig} */
const nextConfig = {
  // Barrel-heavy packages: only the used icons/widgets are bundled.
  optimizePackageImports: ['intl-tel-input', 'simple-icons'],
  experimental: {
    // Inline CSS into the HTML head instead of render-blocking link tags.
    inlineCss: true,
  },
}

export default nextConfig
