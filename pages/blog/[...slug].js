import fs from 'fs'
import generateRss from '@/lib/generate-rss'
import { MDXRemote } from 'next-mdx-remote'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import PostLayout from '@/layouts/PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null

  const post = await getFileBySlug('blog', params.slug.join('/'))
  const authors = post.frontMatter.authors || 'tuanducdesign'
  const authorData = await getFileBySlug('authors', authors)
  const authorDetails = authorData.frontMatter

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { source, frontMatter } = post

  return (
    <PostLayout frontMatter={frontMatter} authorDetails={authorDetails} prev={prev} next={next}>
      <MDXRemote {...source} />
    </PostLayout>
  )
}
