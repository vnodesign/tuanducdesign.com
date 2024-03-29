const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/series-nextdns',
        destination: '/blog/series-nextdns',
        permanent: true,
      },
      {
        source: '/series',
        destination: '/blog/series',
        permanent: true,
      },
      {
        source: '/series/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/category/:slug',
        destination: '/tags/:slug',
        permanent: true,
      },
      {
        source: '/my-customer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tags',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lazyload-facebook-customize-chat',
        destination: '/blog/lazyload-facebook-customize-chat',
        permanent: true,
      },
      {
        source: '/tang-toc-website-tu-preload',
        destination: '/blog/tang-toc-website-tu-preload',
        permanent: true,
      },
      {
        source: '/lazyload-zalo-plugins',
        destination: '/blog/lazyload-zalo-plugins',
        permanent: true,
      },
      {
        source: '/lazyload-twitter-publish',
        destination: '/blog/lazyload-twitter-publish',
        permanent: true,
      },
      {
        source: '/cai-dat-module-pagespeed-len-may-chu-nginx',
        destination: '/blog/cai-dat-module-pagespeed-len-may-chu-nginx',
        permanent: true,
      },
      {
        source: '/huong-dan-su-dung-thu-vien-deferjs-cua-mai-nhut-tan',
        destination: '/blog/huong-dan-su-dung-thu-vien-deferjs-cua-mai-nhut-tan',
        permanent: true,
      },
      {
        source: '/tang-toc-website-bang-cach-su-dung-staticaly',
        destination: '/blog/tang-toc-website-bang-cach-su-dung-staticaly',
        permanent: true,
      },
      {
        source: '/lazyload-google-fonts',
        destination: '/blog/lazyload-google-fonts',
        permanent: true,
      },
      {
        source: '/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website',
        destination: '/blog/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website',
        permanent: true,
      },
      {
        source: '/cach-su-dung-github-va-staticaly-de-toi-uu-website',
        destination: '/blog/cach-su-dung-github-va-staticaly-de-toi-uu-website',
        permanent: true,
      },
      {
        source: '/lazyload-image-va-iframe',
        destination: '/blog/lazyload-image-va-iframe',
        permanent: true,
      },
      {
        source: '/meo-toi-uu-website-khi-su-dung-zalo-plugins',
        destination: '/blog/meo-toi-uu-website-khi-su-dung-zalo-plugins',
        permanent: true,
      },
      {
        source: '/meo-toi-uu-website-khi-su-dung-facebook-plugins',
        destination: '/blog/meo-toi-uu-website-khi-su-dung-facebook-plugins',
        permanent: true,
      },
      {
        source: '/bo-ba-thu-vien-than-thanh-giup-website-toi-uu',
        destination: '/blog/bo-ba-thu-vien-than-thanh-giup-website-toi-uu',
        permanent: true,
      },
      {
        source: '/lazyload-google-adsense',
        destination: '/blog/lazyload-google-adsense',
        permanent: true,
      },
      {
        source: '/lazyload-youtube-va-responsive-video',
        destination: '/blog/lazyload-youtube-va-responsive-video',
        permanent: true,
      },
      {
        source: '/lazyload-google-map',
        destination: '/blog/lazyload-google-map',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
