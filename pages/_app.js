import '@/styles/build.css'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
// import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <div className="vno-flex vno-flex-col">
        <Header />
        <main className="vno-min-h-screen vno-flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
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
        defer
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
      />
    </ThemeProvider>
  )
}
