import '@/css/tailwind.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
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
      <Analytics />
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <div className="vno-flex vno-min-h-screen vno-flex-col">
        <Header />
        <main className="vno-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
