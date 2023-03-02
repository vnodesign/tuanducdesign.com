const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// get post data
const postsDir = path.join('data')
const files = fs.readdirSync(postsDir)
const posts = files.filter(file => {
  const extension = path.extname(file)
  return extension === '.md' || extension === '.mdx'
}).map(file => {
  const slug = path.basename(file, path.extname(file))
  const content = fs.readFileSync(path.join(postsDir, file), 'utf8')
  const { data } = matter(content)

  return {
    frontmatter: data,
    content: content,
    slug: slug,
  }
})

// write json file. Must need a ./json folder before writing
try {
  fs.writeFileSync('json/posts.json', JSON.stringify(posts))
} catch (err) {
  console.error(err)
}
