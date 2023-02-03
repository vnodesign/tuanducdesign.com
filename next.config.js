const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts'],
    },
    async redirects() {
      return require('./redirects.json')
    },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      // Note, preact is only enabled for production builds (`next build`)
      if (!dev && !isServer) {
        config.resolve.alias = {
          ...config.resolve.alias,
          'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        }
      }

      return config
    },
  }
)
