import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'

const LAYOUT = 'ProjectsLayout'

export async function getStaticPaths() {
  const projects = getFiles('projects')
  return {
    paths: projects.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projects = await getFileBySlug('projects', params.slug.join('/'))

  return { props: { projects } }
}

export default function Projects({ projects }) {
  const { mdxSource, frontMatter } = projects

  return <MDXLayoutRenderer layout={LAYOUT} mdxSource={mdxSource} frontMatter={frontMatter} />
}
