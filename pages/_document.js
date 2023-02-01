import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang={siteMetadata.language}
        className="dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
      >
        <Head>
          <meta name="application-name" content={siteMetadata.title} />
          <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
          <meta name="msapplication-TileColor" content="#38bdf8" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href={siteMetadata.siteLogo} />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon-180x180.png"
          />
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
          <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
          <link rel="dns-prefetch" href="//www.googletagservices.com" />
          <link rel="dns-prefetch" href="//adservice.google.com" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body className="vno-bg-white vno-text-slate-500 vno-antialiased dark:vno-bg-slate-900 dark:vno-text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
