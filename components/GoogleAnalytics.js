import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

const GoogleAnalytics = () => {
  ;<>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.googleAnalyticsId}`}
    />

    <Script id="gtag-script">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
      `}
    </Script>
  </>
}

export default GoogleAnalytics
