import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

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
  const allProjects = await getAllFilesFrontMatter('projects')
  const projectsIndex = allProjects.findIndex(
    (project) => formatSlug(project.slug) === params.slug.join('/')
  )
  const prev = allProjects[projectsIndex + 1] || null
  const next = allProjects[projectsIndex - 1] || null
  const projects = await getFileBySlug('projects', params.slug.join('/'))

  return { props: { projects, next, prev } }
}

export default function Projects({ projects, next, prev }) {
  const { mdxSource, frontMatter } = projects

  return (
    <MDXLayoutRenderer
      layout={LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      prev={prev}
      next={next}
    />
  )
}
