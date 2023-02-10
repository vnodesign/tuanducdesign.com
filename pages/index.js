import dynamic from 'next/dynamic'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
const Header = dynamic(() => import('@/components/home/Header'))
const About = dynamic(() => import('@/components/home/About'))
const LatestPosts = dynamic(() => import('@/components/home/LatestPosts'))

export const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title} - Front-end Developer`}
        description={siteMetadata.description}
      />
      <div className="vno-mb-20 vno-overflow-hidden sm:vno-mb-32 md:vno-mb-40">
        <Header />
        <About />
      </div>
      <LatestPosts posts={posts} totalPages={MAX_DISPLAY} />
    </>
  )
}
