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
          <link rel="manifest" href="/static/site.manifest" />
          <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#0B1120" media="(prefers-color-scheme: dark)" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="vno-bg-white vno-text-slate-500 vno-antialiased dark:vno-bg-slate-900 dark:vno-text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
