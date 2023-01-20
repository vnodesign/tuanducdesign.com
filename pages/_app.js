import '@/styles/build.css'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
const Analytics = dynamic(() => import('@/components/analytics'))
import Header from '@/components/Header'
const Footer = dynamic(() => import('@/components/Footer'))

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Analytics />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
      />
      <div className="vno-flex vno-flex-col">
        <Header />
        <main className="vno-min-h-screen vno-flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
