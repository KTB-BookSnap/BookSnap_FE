import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-booksnap-test.s3.ap-northeast-2.amazonaws.com"],
  },
};

export default nextConfig;
