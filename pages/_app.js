import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <div className="vno-flex vno-flex-col vno-min-h-screen">
        <Header />
        <main className="vno-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
