/* eslint-disable react-hooks/exhaustive-deps */
import '@/styles/tailwind.css'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import ReactGA from 'react-ga'
import { ClientReload } from '@/components/ClientReload'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showHeader = router.pathname !== '/'
  ReactGA.initialize(`${siteMetadata.analytics.googleAnalyticsId}`)
  NProgress.configure({ showSpinner: false })
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])
  return (
    <div className="vno-flex vno-flex-col">
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      {showHeader && <Header />}
      <main className="vno-min-h-screen vno-flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
        crossOrigin="anonymous"
      ></script>
    </div>
  )
}
