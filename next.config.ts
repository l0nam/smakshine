import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx', 'md'],
  experimental: {
    mdxRs: true
  },
  images: {
    domains: ['cdn.dribbble.com'],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);