/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|svg)$/,
      loader: "file-loader",
      options: {
        esModule: false,
        name: "[name].[ext]",
        outputPath: "static/media/fonts/",
        publicPath: "../assets/fonts/",
      },
    });
    return config;
  },
};
