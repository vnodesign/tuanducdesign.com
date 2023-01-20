/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import NextImage from 'next/image'
import CustomLink from './Link'
import Pre from './Pre'

export const MDXComponents = {
  Image: (props) => (
    <div className="vno-not-prose vno-relative vno-my-[2em] vno-overflow-hidden vno-rounded-lg first:vno-mt-0 last:vno-mb-0">
      <NextImage {...props} loading="eager" />
      <div className="vno-absolute vno-inset-0 vno-rounded-lg vno-ring-1 vno-ring-inset vno-ring-slate-900/10" />
    </div>
  ),
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
