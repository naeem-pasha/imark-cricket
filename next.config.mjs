/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add domains that you want to allow for the <Image /> component
    domains: ["cricbuzz-cricket.p.rapidapi.com"],
    // Optionally allow unoptimized images (useful for debugging)
    unoptimized: false, // Set to `true` if you want to bypass optimizations
  },
  // Enable React strict mode and SWC minifier
  reactStrictMode: true,
  // If needed, specify any experimental features
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
