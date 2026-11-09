import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
    qualities: [75, 100],
    remotePatterns: [{ hostname: "avatar.iran.liara.run" }],
  },
};


const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

