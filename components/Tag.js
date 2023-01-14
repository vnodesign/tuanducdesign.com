import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/blog/tags/${kebabCase(text)}`}
      className="vno-mr-2 vno-mb-2 vno-rounded vno-bg-blue-100 vno-px-2.5 vno-py-0.5 vno-text-sm vno-font-medium vno-text-blue-800 hover:vno-bg-blue-200 dark:vno-bg-blue-200 dark:vno-text-blue-800 dark:hover:vno-bg-blue-300"
      title={text}
    >
      {text}
    </Link>
  )
}

export default Tag
