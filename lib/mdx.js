import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import walkDir from './utils/files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkImgToJsx from './remark-img-to-jsx'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import withLinkRoles from './withLinkRoles'

const root = process.cwd()

export function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  const source = await fs.promises.readFile(filePath, 'utf8')

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkImgToJsx],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
        withLinkRoles,
      ],
    },
    scope: data,
  })

  return {
    source: mdxSource,
    frontMatter: {
      slug: slug || null,
      fileName: path.basename(filePath),
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, 'data', folder)

  const files = walkDir(prefixPaths)

  const allFrontMatter = await Promise.all(
    files.map(async (file) => {
      const ext = path.extname(file)
      if (ext !== '.md' && ext !== '.mdx') {
        return null
      }
      const source = await fs.promises.readFile(file, 'utf8')
      const { data: frontmatter } = matter(source)
      const slug = formatSlug(path.basename(file))
      return {
        ...frontmatter,
        slug,
      }
    })
  )

  return allFrontMatter.filter(Boolean).sort((a, b) => dateSortDesc(a.date, b.date))
}
