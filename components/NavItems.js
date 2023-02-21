import { useRouter } from 'next/router'
import Link from './Link'
import clsx from 'clsx'
import gtagTrack from '@/lib/utils/gtag'

export default function NavItems({ item }) {
  const { asPath } = useRouter()
  return (
    <>
      {item.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={clsx(
              asPath === link.href
                ? 'vno-text-sky-500 dark:vno-text-sky-400'
                : 'hover:vno-text-sky-500 dark:hover:vno-text-sky-400'
            )}
            title={link.title}
            onClick={() => gtagTrack('NavLink', link.href)}
          >
            {link.title}
            {link.showNew && (
              <span className="vno-ml-2 vno-rounded-full vno-bg-sky-400/10 vno-px-2 vno-py-0.5 vno-text-xs vno-font-medium vno-leading-5 vno-text-sky-600 dark:vno-text-sky-400">
                New
              </span>
            )}
          </Link>
        </li>
      ))}
    </>
  )
}
