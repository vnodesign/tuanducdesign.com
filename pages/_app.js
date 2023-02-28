import '@/styles/main.css'
import { SearchProvider } from '@/components/Search'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import { ResizeObserver } from '@juggle/resize-observer'
import 'intersection-observer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { FBChatScript } from '@/components/CustomizeChat'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from '@/components/MDXComponents'

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  window.ResizeObserver = ResizeObserver
}

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function App({ Component, pageProps, router }) {
  const showHeader = router.pathname !== '/' && router.pathname !== '/service'
  return (
    <SearchProvider>
      <MDXProvider components={MDXComponents}>
        <div className="vno-flex vno-flex-col">
          {showHeader && <Header />}
          <main className="vno-min-h-screen vno-flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Analytics />
        <GoogleAnalytics />
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <FBChatScript />
      </MDXProvider>
    </SearchProvider>
  )
}
