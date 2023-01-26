import '@/styles/tailwind.css'
import 'focus-visible'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
import { Analytics } from '@vercel/analytics/react'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import { ResizeObserver } from '@juggle/resize-observer'
import 'intersection-observer'

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
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="vno-flex vno-flex-col">
        <Header />
        <main className="vno-min-h-screen vno-flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Analytics />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
      />
      <Script id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
      />
    </>
  )
}
