import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Note: experimental.inlineCss was measured here and made things worse. It duplicates the CSS
  // into the RSC payload as well as the <style> tag, taking the home page from 42KB to 74KB
  // gzipped and pushing FCP from 1.6s to 2.3s, which costs more than the render-blocking request.
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
