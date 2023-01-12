import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

export const PageSEO = ({ title, description, breadcrumb = false }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${siteMetadata.siteUrl}${router.asPath}`}
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
            }
          ],
          siteName: "Tuan Duc Design",
          type: "website",
          locale: "vi_VN",
        }}
        facebook={{
          appId: '1031926270674334',
        }}
        twitter={{
          handle: siteMetadata.twitter,
          site: siteMetadata.twitter,
          cardType: "summary_large_image",
        }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            content: "100005485267478",
            property: "fb:admins"
          },
          {
            content: title,
            name: "twitter:title",
          },
          {
            content: description,
            name: "twitter:description",
          },
          {
            content: twImageUrl,
            name: "twitter:image"
          },
        ]}
      />
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
      <NextSeo
        title={title}
        description={description}
        canonical={`${siteMetadata.siteUrl}${router.asPath}`}
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
            }
          ],
          siteName: "Tuan Duc Design",
          type: "website",
          locale: "vi_VN",
        }}
        facebook={{
          appId: '1031926270674334',
        }}
        twitter={{
          handle: siteMetadata.twitter,
          site: siteMetadata.twitter,
          cardType: "summary_large_image",
        }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            content: "100005485267478",
            property: "fb:admins"
          },
          {
            content: title,
            name: "twitter:title",
          },
          {
            content: description,
            name: "twitter:description",
          },
          {
            content: twImageUrl,
            name: "twitter:image"
          },
        ]}
        additionalLinkTags={[
          {
            rel: "alternate",
            type: "application/rss+xml",
            title: `${title} - RSS feed`,
            href: `${siteMetadata.siteUrl}${router.asPath}/feed.xml`,
          },
        ]}
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
            name: title,
            item: `${siteMetadata.siteUrl}${router.asPath}`,
          },
        ]}
      />
    </>
  )
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images,
}) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  const ogImage = images ? `${siteMetadata.siteUrl}${images}` : `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`

  const router = useRouter()

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={`${siteMetadata.siteUrl}${router.asPath}`}
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
            }
          ],
          siteName: "Tuan Duc Design",
          type: "article",
          locale: "vi_VN",
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
          },
        }}
        facebook={{
          appId: '1031926270674334',
        }}
        twitter={{
            handle: siteMetadata.twitter,
            site: siteMetadata.twitter,
            cardType: "summary_large_image",
        }}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            content: "100005485267478",
            property: "fb:admins"
          },
          {
            content: title,
            name: "twitter:title",
          },
          {
            content: summary,
            name: "twitter:description",
          },
          {
            content: ogImage,
            name: "twitter:image"
          },
        ]}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={
          [
            ogImage,
          ]
        }
        datePublished={publishedAt}
        dateModified={modifiedAt}
        authorName={[
          {
            name: authorDetails.name,
            url: authorDetails.twitter,
          }
        ]}
        publisherName={siteMetadata.title}
        publisherLogo={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        description={summary}
        isAccessibleForFree={true}
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
