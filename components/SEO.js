import Head from 'next/head'
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

const CommonSEO = ({ title, description, openGraph, twImage }) => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${siteMetadata.siteUrl}${router.asPath}`}
        openGraph={openGraph}
        themeColor="#ffffff"
        facebook={{
          appId: '1031926270674334',
        }}
        twitter={{
          handle: siteMetadata.twitter,
          site: siteMetadata.twitter,
          cardType: 'summary_large_image',
        }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <Head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.googletagservices.com" />
        <link rel="dns-prefetch" href="//adservice.google.com" />
        <link rel="shortcut icon" href={siteMetadata.siteLogo} />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
        <meta name="application-name" content={siteMetadata.title} />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
        <meta name="fb:admins" content="100005485267478" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twImage} />
      </Head>
    </>
  )
}

export const PageSEO = ({ title, description, breadcrumb = false }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${siteMetadata.siteUrl}${router.asPath}`,
          images: [
            {
              url: ogImageUrl,
              alt: title,
              width: 1200,
              height: 630,
            },
          ],
          siteName: siteMetadata.title,
          type: 'website',
          locale: 'vi_VN',
        }}
        twImage={twImageUrl}
      />
      <Head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      {breadcrumb && (
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'Trang chủ',
              item: siteMetadata.siteUrl,
            },
            {
              position: 2,
              name: title,
              item: `${siteMetadata.siteUrl}${router.asPath}`,
            },
          ]}
        />
      )}
    </>
  )
}

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${siteMetadata.siteUrl}${router.asPath}`,
          images: [
            {
              url: ogImageUrl,
              alt: title,
              width: 1200,
              height: 630,
            },
          ],
          siteName: siteMetadata.title,
          type: 'website',
          locale: 'vi_VN',
        }}
        twImage={twImageUrl}
      />
      <Head>
        <link rel="alternate" type="application/rss+xml" href={`${router.asPath}/feed.xml`} />
      </Head>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Trang chủ',
            item: siteMetadata.siteUrl,
          },
          {
            position: 2,
            name: title,
            item: `${siteMetadata.siteUrl}${router.asPath}`,
          },
        ]}
      />
    </>
  )
}

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, images }) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  const ogImage = images
    ? `${siteMetadata.siteUrl}${images}`
    : `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`

  const router = useRouter()

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        openGraph={{
          title: title,
          description: summary,
          url: `${siteMetadata.siteUrl}${router.asPath}`,
          images: [
            {
              url: ogImage,
              alt: title,
              width: 1200,
              height: 630,
            },
          ],
          siteName: siteMetadata.title,
          type: 'article',
          locale: 'vi_VN',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
          },
        }}
        twImage={ogImage}
      />
      <Head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <ArticleJsonLd
        url={url}
        title={title}
        images={[ogImage]}
        datePublished={publishedAt}
        dateModified={modifiedAt}
        authorName={[
          {
            name: authorDetails.name,
            url: authorDetails.twitter,
          },
        ]}
        publisherName={siteMetadata.title}
        publisherLogo={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        description={summary}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Trang chủ',
            item: siteMetadata.siteUrl,
          },
          {
            position: 2,
            name: 'Blog',
            item: `${siteMetadata.siteUrl}/blog`,
          },
          {
            position: 3,
            name: title,
            item: `${siteMetadata.siteUrl}${router.asPath}`,
          },
        ]}
      />
    </>
  )
}
