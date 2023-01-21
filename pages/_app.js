import '@/styles/build.css'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
const Footer = dynamic(() => import('@/components/Footer'))
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
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
  
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v15.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
      <script
        defer
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063"
      />
    </ThemeProvider>
  )
}
