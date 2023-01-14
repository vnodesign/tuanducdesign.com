import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(siteMetadata.language, options)

  return now
}

export default formatDate
