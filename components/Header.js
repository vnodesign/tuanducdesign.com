import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Router, { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from './Image'
import Link from './Link'
import { ThemeSelect, ThemeToggle } from './ThemeToggle'

function Featured() {
  return (
    <Link
      href="/blog/series-nextdns"
      className="vno-ml-3 vno-text-xs vno-leading-5 vno-font-medium vno-text-sky-600 dark:vno-text-sky-400 vno-bg-sky-400/10 vno-rounded-full vno-py-1 vno-px-3 vno-hidden xl:vno-flex vno-items-center hover:vno-bg-sky-400/20"
    >
      <strong className="vno-font-semibold">Hướng dẫn sử dụng NextDNS</strong>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="vno-ml-2 vno-text-sky-600 dark:vno-text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span className="vno-ml-2 min-[1372px]:vno-hidden">
        Chặn ADS, bảo vệ gia đình, và hơn thế nữa
      </span>
      <span className="vno-ml-2 vno-hidden min-[1372px]:vno-inline">
        Chặn ADS, bảo vệ gia đình, và hơn thế nữa
      </span>
      <svg
        width="3"
        height="6"
        className="vno-ml-3 vno-overflow-visible vno-text-sky-300 dark:vno-text-sky-400"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}

function NavPopover({ display = 'md:vno-hidden', className, ...props }) {
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
        className="vno-flex vno-items-center vno-justify-center vno-w-8 vno-h-8 vno-text-slate-500 hover:vno-text-slate-600 dark:hover:vno-text-slate-300"
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
        <div className="vno-fixed vno-w-full vno-max-w-xs vno-p-6 vno-text-base vno-font-semibold vno-text-slate-900 vno-bg-white vno-rounded-lg vno-shadow-lg vno-top-4 vno-right-4 dark:vno-bg-slate-800 dark:vno-text-slate-400 dark:vno-highlight-white/5">
          <button
            type="button"
            className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-8 vno-h-8 vno-top-5 vno-right-5 vno-text-slate-500 hover:vno-text-slate-600 dark:vno-text-slate-400 dark:hover:vno-text-slate-300"
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
            <NavItems />
            <li>
              <Link
                href="https://github.com/vnodesign"
                className="hover:vno-text-sky-500 dark:hover:vno-text-sky-400"
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

function NavItems() {
  const router = useRouter()
  return (
    <>
      {headerNavLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames(
              'vno-transition-colors vno-duration-200',
              router.pathname == link.href
                ? 'vno-text-sky-500 dark:vno-text-sky-400'
                : 'hover:vno-text-sky-500 dark:hover:vno-text-sky-400'
            )}
            title={link.title}
          >
            {link.title}
            {link.showNew && (
              <span className="vno-ml-2 vno-font-medium vno-text-xs vno-leading-5 vno-rounded-full vno-text-sky-600 vno-bg-sky-400/10 vno-px-2 vno-py-0.5 dark:vno-text-sky-400">
                New
              </span>
            )}
          </Link>
        </li>
      ))}
    </>
  )
}

export default function Header({ hasNav = false, navIsOpen, onNavToggle }) {
  let [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    let offset = 50
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true)
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [isOpaque])

  return (
    <header
      className={classNames(
        'vno-sticky vno-top-0 vno-z-40 vno-w-full vno-flex-none vno-backdrop-blur vno-transition-colors vno-duration-500 lg:vno-z-50 lg:vno-border-b lg:vno-border-slate-900/10 dark:vno-border-slate-50/[0.06]',
        isOpaque
          ? 'vno-bg-white supports-backdrop-blur:vno-bg-white/95 dark:vno-bg-slate-900/75'
          : 'vno-bg-white/95 supports-backdrop-blur:vno-bg-white/60 dark:vno-bg-transparent'
      )}
    >
      <div className="vno-max-w-8xl vno-mx-auto">
        <div
          className={classNames(
            'vno-py-4 vno-border-b vno-border-slate-900/10 lg:vno-px-8 lg:vno-border-0 dark:vno-border-slate-300/10',
            hasNav ? 'vno-mx-4 lg:vno-mx-0' : 'vno-px-4'
          )}
        >
          <div className="vno-relative vno-flex vno-items-center">
            <Link
              href="/"
              className="vno-mr-3 vno-w-[2.0625rem] vno-flex-none vno-overflow-hidden md:vno-w-auto"
              title={`Trang chủ ${siteMetadata.title}`}
            >
              <span className="vno-sr-only">Trang chủ {siteMetadata.title}</span>
              <Image
                src={siteMetadata.siteLogo}
                className="vno-rounded-full"
                alt={siteMetadata.title}
                width={32}
                height={32}
                priority
              />
            </Link>
            <Featured />
            <div className="vno-relative vno-items-center vno-hidden vno-ml-auto lg:vno-flex">
              <nav className="vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-700 dark:vno-text-slate-200">
                <ul className="vno-flex vno-space-x-8">
                  <NavItems />
                </ul>
              </nav>
              <div className="vno-flex vno-items-center vno-pl-6 vno-ml-6 vno-border-l vno-border-slate-200 dark:vno-border-slate-800">
                <ThemeToggle panelClassName="vno-mt-8" />
                <Link
                  href="https://github.com/vnodesign"
                  className="vno-block vno-ml-6 vno-text-gray-500 hover:vno-text-gray-900 dark:vno-text-gray-400 dark:hover:vno-text-white"
                >
                  <span className="vno-sr-only">GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="vno-w-5 vno-h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
              </div>
            </div>
            <NavPopover className="vno-ml-auto" display="lg:vno-hidden" />
          </div>
        </div>
        {hasNav && (
          <div className="vno-flex vno-items-center vno-p-4 vno-border-b vno-border-slate-900/10 lg:vno-hidden dark:vno-border-slate-50/[0.06]">
            <button
              type="button"
              onClick={() => onNavToggle(!navIsOpen)}
              className="vno-text-slate-500 hover:vno-text-slate-600 dark:hover:vno-text-slate-300"
            >
              <span className="vno-sr-only">Navigation</span>
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
