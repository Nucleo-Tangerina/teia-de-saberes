import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/palestras-formacoes", destination: "/palestras-rodas-de-conversa", permanent: true }];
  },
};

export default nextConfig;
