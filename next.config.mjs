/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds a fully static site into ./out — host it anywhere (GitHub Pages, Netlify, Vercel...).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // If you host on GitHub Pages under https://<user>.github.io/<repo>/, uncomment and set:
  // basePath: "/<repo>",
};

export default nextConfig;
