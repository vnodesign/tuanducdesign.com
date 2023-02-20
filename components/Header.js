import NavPopover from './NavPopover'
import NavItems from './NavItems'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { SearchModal } from './SearchModal'
import Image from './Image'
import Link from './Link'
import gtagTrack from '@/lib/utils/gtag'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
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
    <>
      <div className="vno-pointer-events-none vno-absolute vno-inset-x-0 vno-top-0 vno-z-20 vno-flex vno-justify-center vno-overflow-hidden">
        <div className="vno-flex vno-w-[108rem] vno-flex-none vno-justify-end">
          <picture>
            <Image
              src={require('@/img/beams/docs@tinypng.png')}
              alt="Background Light"
              className="vno-w-[71.75rem] vno-flex-none vno-max-w-none dark:vno-hidden"
              unoptimized
            />
          </picture>
          <picture>
            <Image
              src={require('@/img/beams/docs-dark@tinypng.png')}
              alt="Background Dark"
              className="vno-w-[90rem] vno-flex-none vno-max-w-none vno-hidden dark:vno-block"
              unoptimized
            />
          </picture>
        </div>
      </div>
      <header
        className={classNames(
          'vno-sticky vno-top-0 vno-z-40 vno-w-full vno-backdrop-blur vno-flex-none vno-transition-colors vno-duration-500 lg:vno-z-50 lg:vno-border-b lg:vno-border-slate-900/10 dark:vno-border-slate-50/[0.06]',
          isOpaque
            ? 'vno-bg-white supports-backdrop-blur:vno-bg-white/95 dark:vno-bg-slate-900/75'
            : 'vno-bg-white/95 supports-backdrop-blur:vno-bg-white/60 dark:vno-bg-transparent'
        )}
      >
        <div className="vno-mx-auto vno-max-w-8xl">
          <div className="vno-py-4 vno-border-b vno-border-slate-900/10 lg:vno-px-8 lg:vno-border-0 dark:vno-border-slate-300/10 vno-px-4">
            <div className="vno-relative vno-flex vno-items-center">
              <Link
                href="/"
                className="vno-mr-3 vno-w-[2.0625rem] vno-flex-none vno-overflow-hidden md:vno-w-auto"
                title={siteMetadata.title}
                onClick={() => gtagTrack('HeaderLogoLink', '/')}
              >
                <span className="vno-sr-only">{siteMetadata.title}</span>
                <Image
                  src={siteMetadata.siteLogo}
                  className="vno-rounded-full"
                  alt={siteMetadata.title}
                  width={32}
                  height={32}
                  sizes="(max-width 32px) 80vw, 50vw"
                  priority
                />
              </Link>
              <div className="vno-relative vno-ml-auto vno-hidden vno-items-center lg:vno-flex">
                <nav className="vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-700 dark:vno-text-slate-200">
                  <ul className="vno-flex vno-space-x-8">
                    <NavItems item={headerNavLinks} />
                  </ul>
                </nav>
                <div className="vno-ml-6 vno-flex vno-items-center vno-border-l vno-border-slate-200 vno-pl-6 dark:vno-border-slate-800">
                  <ThemeToggle panelClassName="vno-mt-8" />
                  <Link
                    href={siteMetadata.github}
                    className="vno-ml-6 vno-block vno-text-slate-400 hover:vno-text-slate-500 dark:hover:vno-text-slate-300"
                    title="GitHub"
                  >
                    <span className="vno-sr-only">GitHub</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="vno-h-5 vno-w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <SearchModal className="vno-flex vno-items-center vno-justify-center vno-w-8 vno-h-8 vno-ml-auto -vno-my-1 vno-text-slate-500 hover:vno-text-slate-600 lg:vno-hidden dark:vno-text-slate-400 dark:hover:vno-text-slate-300">
                <span className="vno-sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5" />
                  <circle cx="11" cy="11" r="6" />
                </svg>
              </SearchModal>
              <NavPopover className="vno-ml-2 -vno-my-1" display="lg:vno-hidden" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
