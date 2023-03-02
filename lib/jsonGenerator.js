const fs = require('fs').promises
const path = require('path')
const matter = require('gray-matter')

const readPosts = async () => {
  const postsDir = path.join('data', 'blog')
  const getPosts = await fs.readdir(postsDir)
  const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/))
  const posts = await Promise.all(
    filterPosts.map(async (filename) => {
      const slug = filename.replace(/\.(mdx|md)/, '')
      const postData = await fs.readFile(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(postData)
      const content = matter(postData).content

      return {
        frontmatter: data,
        content,
        slug,
      }
    })
  )
  return posts
}

const writePostsJSON = async (data) => {
  try {
    await fs.mkdir('json', { recursive: true })
    await fs.writeFile('json/posts.json', JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

;(async () => {
  const posts = await readPosts()
  await writePostsJSON(posts)
})()
