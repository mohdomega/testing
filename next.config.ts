import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Force Webpack instead of Turbopack (VERY IMPORTANT)
  // This makes your old project behave exactly like Next 15
  experimental: {
    webpackBuildWorker: false,
  },

  // Empty config so Next 16 does not break
  turbopack: {},

  webpack(config) {
    // Find existing SVG rule
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.test?.(".svg")
    );

    if (fileLoaderRule) {
      // SVG as file (image.svg?url)
      config.module.rules.push({
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      });

      // SVG as React component (image.svg)
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      });

      // Stop Next/Turbopack from processing SVGs in default way
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
