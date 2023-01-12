import slugify from 'slugify'

const kebabCase = (str) => slugify(str, { lower: true })

export default kebabCase
