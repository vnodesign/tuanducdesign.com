const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// get post data
const getPosts = fs.readdirSync(path.join('data/blog'))
const filterPosts = getPosts.filter((post) => post.match(/^(?!_)/))
const posts = filterPosts.map((filename) => {
  const slug = filename.replace(/\.(mdx|md)/, '')
  const postData = fs.readFileSync(path.join('data/blog/', filename), 'utf-8')
  const { data } = matter(postData)
  const content = matter(postData).content

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
