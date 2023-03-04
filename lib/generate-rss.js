import { escape } from '@/lib/utils/htmlEscaper'
import siteMetadata from '@/data/siteMetadata'

const { siteUrl, title, description, language, email } = siteMetadata

const generateRssItem = (post) => `
  <item>
    <guid>${siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${email}</author>
    ${post.tags?.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(title)}</title>
      <link>${siteUrl}/blog</link>
      <description>${escape(description)}</description>
      <language>${language}</language>
      <managingEditor>${email}</managingEditor>
      <webMaster>${email}</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`

export default generateRss
