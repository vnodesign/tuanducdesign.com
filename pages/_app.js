import '@/styles/build.css'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="vno-flex vno-flex-col">
        <Header />
        <main className="vno-min-h-screen vno-flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
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
      <Script id="fb-script">
        {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "121349286117840");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function () {
              FB.init({ xfbml: !0, version: 'v14.0' })
            }
            function td_customerchat() {
              var t = document.createElement('script')
              ;(t.async = !0),
                (t.defer = !0),
                (t.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'),
                document.body.appendChild(t)
            }
            window.addEventListener
              ? window.addEventListener('load', td_customerchat, !1)
              : window.attachEvent
              ? window.attachEvent('onload', td_customerchat)
              : (window.onload = td_customerchat)
        `}
      </Script>
      <script
        defer
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
      />
    </>
  )
}
