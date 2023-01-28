import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'
import { Analytics } from '@vercel/analytics/react'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={siteMetadata.language} className="dark">
        <Head>
          <link rel="shortcut icon" href="/static/CA0E67E9-AAD0-4D36-82D8-674C7504DFD1.jpg" />
          <link rel="manifest" href="/static/site.manifest" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
          <meta name="theme-color" content="#f8fafc" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
              `,
            }}
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="vno-bg-white vno-text-slate-500 vno-antialiased dark:vno-bg-slate-900 dark:vno-text-slate-400">
          <Main />
          <NextScript />
          <Analytics />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}
