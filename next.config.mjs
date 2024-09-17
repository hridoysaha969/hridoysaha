/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  exportTrailingSlash: true,
};

export default nextConfig;
