import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Router from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import NavItems from './NavItems'
import { ThemeSelect } from './ThemeToggle'

export default function NavPopover({ display = 'md:vno-hidden', className, ...props }) {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={classNames(className, display)} {...props}>
      <button
        type="button"
        className="vno-text-slate-500 vno-w-8 vno-h-8 vno-flex vno-items-center vno-justify-center hover:vno-text-slate-600 dark:vno-text-slate-400 dark:hover:vno-text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="vno-sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        className={classNames('vno-fixed vno-z-50 vno-inset-0', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="vno-fixed vno-inset-0 vno-bg-black/20 vno-backdrop-blur-sm dark:vno-bg-slate-900/80" />
        <div className="vno-fixed vno-top-4 vno-right-4 vno-w-full vno-max-w-xs vno-bg-white vno-rounded-lg vno-shadow-lg vno-p-6 vno-text-base vno-font-semibold vno-text-slate-900 dark:vno-bg-slate-800 dark:vno-text-slate-400 dark:vno-highlight-white/5">
          <button
            type="button"
            className="vno-flex vno-items-center vno-justify-center vno-h-8 vno-absolute vno-top-5 vno-right-5 vno-w-8 vno-text-slate-500 hover:vno-text-slate-600 dark:vno-text-slate-400 dark:hover:vno-text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="vno-sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="vno-w-2.5 vno-h-2.5 vno-overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="vno-space-y-6">
            <NavItems item={headerNavLinks} />
            <li>
              <Link
                href={siteMetadata.github}
                className="hover:vno-text-sky-500 dark:hover:text-sky-400"
                title="GitHub"
              >
                GitHub
              </Link>
            </li>
          </ul>
          <div className="vno-pt-6 vno-mt-6 vno-border-t vno-border-slate-200 dark:vno-border-slate-200/10">
            <ThemeSelect />
          </div>
        </div>
      </Dialog>
    </div>
  )
}
