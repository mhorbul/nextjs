/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME_VAR: process.env.APP_NAME,
  },
};

export default nextConfig;
