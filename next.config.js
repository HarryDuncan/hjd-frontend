/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  async headers() {
    return [];
  },
};
// const nextConfig = {};
// module.exports = {
//

// };
