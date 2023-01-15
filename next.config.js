const withPWA = require("next-pwa")

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  pwa:{
    dest:"public",
    register:true,
    skipWaiting:true,
    disable:process.env.NODE_ENV === 'development'
  }
})
