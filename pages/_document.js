import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link rel="shortcut icon" href="/static/CA0E67E9-AAD0-4D36-82D8-674C7504DFD1.jpg" />
          <link rel="manifest" href="/static/manifest.webmanifest" />
          <meta name="theme-color" content="#f8fafc" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
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
        </Head>
        <body className="vno-antialiased vno-text-slate-500 dark:vno-text-slate-400 vno-bg-white dark:vno-bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
