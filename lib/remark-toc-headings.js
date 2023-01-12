import { visit } from 'unist-util-visit'
import slugify from 'slugify'
import { toString } from 'mdast-util-to-string'

export default function remarkTocHeadings(options) {
  return (tree) =>
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + slugify(textContent, { lower: true }),
        depth: node.depth,
      })
    })
}
