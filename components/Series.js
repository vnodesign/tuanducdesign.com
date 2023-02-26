import { Menu } from '@headlessui/react'
import Link from './Link'
import clsx from 'clsx'
import gtagTrack from '@/lib/utils/gtag'

export default function Series({ item }) {
  return (
    <Menu as="div" className="vno-relative">
      <Menu.Button className="vno-flex vno-items-center vno-px-3 vno-py-1 vno-space-x-2 vno-text-xs vno-font-semibold vno-leading-5 vno-rounded-full vno-bg-slate-400/10 hover:vno-bg-slate-400/20 dark:vno-highlight-white/5">
        Danh sách series
        <svg width="6" height="3" className="vno-ml-2 vno-overflow-visible" aria-hidden="true">
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="vno-absolute vno-w-40 vno-py-2 vno-mt-1 vno-text-sm vno-font-semibold vno-leading-6 vno-bg-white vno-rounded-lg vno-shadow vno-top-full vno-ring-1 vno-ring-slate-900/5 vno-text-slate-700 dark:vno-bg-slate-800 dark:vno-text-slate-300 dark:vno-highlight-white/5">
        {item.map((link) => (
          <Menu.Item key={link.href}>
            {({ active }) => (
              <Link
                href={link.href}
                className={clsx(
                  'vno-block vno-px-3 vno-py-1',
                  active &&
                    'vno-bg-slate-50 vno-text-slate-900 dark:vno-bg-slate-600/30 dark:vno-text-white'
                )}
                title={link.title}
                onClick={() => gtagTrack('SeriesLink', link.href)}
              >
                {link.title}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
