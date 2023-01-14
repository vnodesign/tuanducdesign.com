const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      scrollRestoration: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts'],
    },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }

      return config
    },
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
  })
)
