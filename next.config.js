/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/calender",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/settings",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["bcrypt"],
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
