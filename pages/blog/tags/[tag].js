import { TagSEO } from '@/components/SEO'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  return (
    <>
      <TagSEO
        title={`Chuyên mục #${tag} | Tuan Duc Design Blog`}
        description={`Các chủ đề chuyên sâu về #${tag} trên blog Tuan Duc Design. Nơi này không có gì ngoài các bài viết chất lượng.`}
      />
      <ListLayout
        posts={posts}
        title={`Chuyên mục #${tag} | Tuan Duc Design Blog`}
        description="Không có gì ngoài các bài viết chất lượng, chuyên sâu."
      />
    </>
  )
}
