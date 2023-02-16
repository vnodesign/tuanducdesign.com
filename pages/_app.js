import '@/styles/tailwind.css'
import React from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { FBChatScript } from '@/components/CustomizeChat'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const showHeader = router.pathname !== '/' && router.pathname !== '/service'
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
  }, [router.events])
  return (
    <>
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
    </>
  )
}
