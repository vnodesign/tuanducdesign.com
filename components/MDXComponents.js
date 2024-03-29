import NextImage from 'next/image'
import CustomLink from './Link'
import Pre from './Pre'
import { H1, H2, H3, H4, H5, H6 } from './Heading'

export const MDXComponents = {
  Image: (props) => (
    <div className="vno-not-prose vno-relative vno-my-[2em] vno-overflow-hidden vno-rounded-lg first:vno-mt-0 last:vno-mb-0">
      <NextImage {...props} loading="lazy" />
      <div className="vno-absolute vno-inset-0 vno-rounded-lg vno-ring-1 vno-ring-inset vno-ring-slate-900/10" />
    </div>
  ),
  a: CustomLink,
  pre: Pre,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}
