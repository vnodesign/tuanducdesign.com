import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/blog/tags/${kebabCase(text)}`}>
      <a className="vno-bg-blue-100 vno-text-blue-800 vno-text-sm vno-font-medium vno-mr-2 vno-px-2.5 vno-py-0.5 vno-rounded dark:vno-bg-blue-200 hover:vno-bg-blue-200 dark:hover:vno-bg-blue-300 dark:vno-text-blue-800 vno-mb-2">
        {text}
      </a>
    </Link>
  )
}

export default Tag
