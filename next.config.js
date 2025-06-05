/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  experimental: {
    allowedDevOrigins: ["http://192.168.0.159:3000"], // Add your IP here
  },
  async headers() {
    return [
      {
        source: `/fonts/Harryduncan.otf`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: `/fonts/Harryduncan.woff2`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: `/fonts/Harryduncan.woff`,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

// const nextConfig = {};
// module.exports = {
//

// };
