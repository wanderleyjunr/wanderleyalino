// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/a-contradicao-de-ser-quem-sou",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
