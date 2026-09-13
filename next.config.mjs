/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removes the "X-Powered-By: Next.js" header — minor security + clean signal
  poweredByHeader: false,

  // Gzip/Brotli compression for all responses
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Modern formats for smaller payloads and better CWV scores
    formats: ["image/avif", "image/webp"],
  },

  // Security + SEO-relevant HTTP response headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME sniffing — important for security + trust signals
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Block clickjacking — protects brand and user trust
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Referrer policy — sends referrer to same origin and HTTPS; good for analytics accuracy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser features — privacy signal to Google
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          // DNS prefetch control
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      // Long-lived cache for static assets (improves LCP / Performance score)
      {
        source: "/(_next/static|favicon.ico|icon-192.png|icon-512.png|apple-touch-icon.png|og-image.jpg)(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
