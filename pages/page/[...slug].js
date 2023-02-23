import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import PageLayout from '@/layouts/PageLayout'

export async function getStaticPaths() {
  const pages = getFiles('page')
  return {
    paths: pages.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = await getFileBySlug('page', params.slug.join('/'))

  return { props: { page } }
}

export default function Page({ page }) {
  const { source, frontMatter } = page

  return (
    <PageLayout frontMatter={frontMatter}>
      <MDXLayoutRenderer {...source} />
    </PageLayout>
  )
}
