/* eslint-disable react-hooks/exhaustive-deps */
import '@/styles/tailwind.css'
import React from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Loader from '@/components/Loader'
import loadable from '@loadable/component'
const Layout = loadable(() => import('@/components/Layout'), {
  fallback: <Loader />,
})
import { ClientReload } from '@/components/ClientReload'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()
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
    <div className="vno-flex vno-flex-col vno-min-h-screen">
      {isDevelopment && isSocket && <ClientReload />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
