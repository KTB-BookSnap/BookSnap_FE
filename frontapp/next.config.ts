import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://s3-booksnap-test.s3.ap-northeast-2.amazonaws.com", // 허용할 외부 이미지 도메인
      },
    ],
  },
};

export default nextConfig;
