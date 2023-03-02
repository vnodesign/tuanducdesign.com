import { visit } from 'unist-util-visit'

const listTagsRegex = /^(ol|ul)$/i

export default function withLinkRoles() {
  return (tree) => {
    visit(tree, 'element', (element) => {
      if (listTagsRegex.test(element.tagName)) {
        element.properties.role = 'list'
      }
    })
  }
}
