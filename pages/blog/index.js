import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSEO title={`Tuan Duc Design Blog - Chia sẻ kiến thức về VPS và Website`} description="Blog về phát triển VPS, tối ưu Website, tăng tốc mạng được cập nhật liên tục bởi Tuan Duc Design" />
      <ListLayout
        posts={posts}
        title="Tuan Duc Design Blog"
        description="Không có gì ngoài các bài viết chất lượng, chuyên sâu."
      />
    </>
  )
}
