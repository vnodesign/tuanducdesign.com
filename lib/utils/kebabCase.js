import slug from 'slug'

const kebabCase = (str) => slug(str).toLowerCase()

export default kebabCase
