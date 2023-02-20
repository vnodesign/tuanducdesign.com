import SearchLayout from '@/layouts/SearchLayout'
import { PageSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'
import { useSearchContext } from 'context/state'
import { useRouter } from 'next/router'

const SearchPage = () => {
  const router = useRouter()
  const { query } = router
  const keyword = kebabCase(query.key)
  const { posts } = useSearchContext()

  const searchResults = posts.filter((post) => {
    if (kebabCase(post.frontmatter.title).includes(keyword)) {
      return post
    }
  })

  return (
    <>
      <PageSEO
        title={`Kết quả tìm kiếm cho "${query.key}"`}
        description="Blog về phát triển VPS, tối ưu Website, tăng tốc mạng được cập nhật liên tục bởi Tuan Duc Design"
      />
      <SearchLayout
        posts={searchResults}
        title={`Kết quả tìm kiếm cho "${query.key}"`}
        description="Không có gì ngoài các bài viết chất lượng, chuyên sâu."
      />
    </>
  )
}

export default SearchPage
