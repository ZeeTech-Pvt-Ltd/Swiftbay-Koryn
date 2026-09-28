/** @type {import('next').NextConfig} */
const nextConfig = {
  // Barrel-heavy packages: only the used icons/widgets are bundled.
  optimizePackageImports: ['intl-tel-input', 'simple-icons'],
}

export default nextConfig
