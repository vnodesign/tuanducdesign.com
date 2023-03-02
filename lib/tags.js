import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllTags(type) {
  const files = getFiles(type)
  const tagCount = {}

  for (const file of files) {
    const source = await fs.promises.readFile(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    const { tags = [] } = data

    tags.forEach((tag) => {
      const formattedTag = kebabCase(tag)
      tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1
    })
  }

  return tagCount
}
