import { slug } from 'github-slugger'

// slugify
export const slugify = (content) => {
  if (!content) return null

  return slug(content)
}
