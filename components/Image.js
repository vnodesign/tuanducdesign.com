import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage {...rest} loading="lazy" decoding="async" />

export default Image
