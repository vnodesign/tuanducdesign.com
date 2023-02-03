import ReactGA from 'react-ga'
import siteMetadata from '@/data/siteMetadata'

const GoogleAnalytics = () => {
  const GA_ID = `${siteMetadata.analytics.googleAnalyticsId}`
  ReactGA.initialize(GA_ID)
  ReactGA.pageview(window.location.pathname)
}

export default GoogleAnalytics
