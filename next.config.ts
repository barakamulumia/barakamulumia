import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  //redirects
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: 'https://beta.mulumia.com/portfolio',
        permanent: true,
      },
      {
        source: '/timeline',
        destination: 'https://beta.mulumia.com/timeline',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/thoughts',
        destination: 'https://beta.mulumia.com/thoughts',
        permanent: true,
      },
      {
        source: '/thoughts/:slug',
        destination: 'https://beta.mulumia.com/thoughts/:slug',
        permanent: true,
      },
    ];
  },

  env: {
    NEXT_PUBLIC_CORE_API_URL: process.env.NEXT_PUBLIC_CORE_API_URL,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  },
};

export default nextConfig;
