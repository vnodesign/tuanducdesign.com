import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { SearchModal } from '@/components/SearchModal'
import Image from '@/components/Image'
import styles from './Header.module.css'
import clsx from 'clsx'
import NavItems from '@/components/NavItems'
import NavPopover from '@/components/NavPopover'
import { ThemeToggle } from '@/components/ThemeToggle'
import Hero from './Hero'

export default function Header() {
  return (
    <header className="vno-relative">
      <div className="vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div
          className={clsx(
            'vno-absolute vno-inset-0 vno-bottom-10 vno-bg-slate-50 vno-bg-bottom vno-bg-no-repeat dark:vno-bg-[#0B1120]',
            styles.beams
          )}
        >
          <div
            className="vno-absolute vno-inset-0 vno-bg-[bottom_1px_center] vno-bg-grid-slate-900/[0.04] dark:vno-border-b dark:vno-border-slate-100/5 dark:vno-bg-bottom dark:vno-bg-grid-slate-400/[0.05]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
        <div className="vno-relative vno-flex vno-items-center vno-justify-between vno-pt-6 vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-700 dark:vno-text-slate-200 lg:vno-pt-8">
          <Link href="/" title={siteMetadata.title}>
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
          <div className="vno-flex vno-items-center">
            <SearchModal className="vno-flex vno-items-center vno-justify-center vno-w-8 vno-h-8 vno-ml-auto -vno-my-1 vno-text-slate-500 hover:vno-text-slate-600 md:vno-hidden dark:vno-text-slate-400 dark:hover:vno-text-slate-300">
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
            <NavPopover className="vno-ml-2 -vno-my-1" display="md:vno-hidden" />
            <div className="vno-hidden vno-items-center md:vno-flex">
              <nav>
                <ul className="vno-flex vno-items-center vno-space-x-8">
                  <NavItems item={headerNavLinks} />
                </ul>
              </nav>
              <div className="vno-ml-6 vno-flex vno-items-center vno-border-l vno-border-slate-200 vno-pl-6 dark:vno-border-slate-800">
                <ThemeToggle />
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
          </div>
        </div>
        <div className="vno-relative vno-mx-auto vno-max-w-5xl vno-pt-20 sm:vno-pt-24 lg:vno-pt-32">
          <h1 className="vno-text-center vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl lg:vno-text-6xl">
            Tối ưu VPS và Website của bạn với các dịch vụ tốt nhất tại Tuan Duc Design.
          </h1>
          <p className="vno-mx-auto vno-mt-6 vno-max-w-3xl vno-text-center vno-text-lg vno-text-slate-600 dark:vno-text-slate-400">
            Chuyên cung cấp dịch vụ về{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">VPS</span>{' '}
            và{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              Website
            </span>
            , hướng dẫn{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              bảo mật VPS
            </span>{' '}
            và{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              Website
            </span>{' '}
            từ cơ bản đến nâng cao cho người không chuyên, hỗ trợ{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              cài đặt VPS
            </span>
            ,{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              tối ưu VPS
            </span>
            ,{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              cài đặt Memcached
            </span>
            ,{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">Redis</span>
            , <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">SSL</span>{' '}
            và{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              CloudFlare
            </span>
            .
          </p>
          <div className="vno-mt-6 sm:vno-mt-10 vno-flex vno-justify-center vno-space-x-6 vno-text-sm">
            <Link
              href="https://www.facebook.com/tuanduc.support"
              className="vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-slate-400 focus:vno-ring-offset-2 focus:vno-ring-offset-slate-50 vno-text-white vno-font-semibold vno-h-12 vno-px-6 vno-rounded-lg vno-w-full vno-flex vno-items-center vno-justify-center sm:vno-w-auto dark:vno-bg-sky-500 dark:vno-highlight-white/20 dark:hover:vno-bg-sky-400"
              title="Kết nối với mình trên Facebook"
            >
              Kết nối với mình trên Facebook
            </Link>
            <SearchModal className="vno-hidden sm:vno-flex vno-items-center vno-w-72 vno-text-left vno-space-x-3 vno-px-4 vno-h-12 vno-bg-white vno-ring-1 vno-ring-slate-900/10 hover:vno-ring-slate-300 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-sky-500 vno-shadow-sm vno-rounded-lg vno-text-slate-400 dark:vno-bg-slate-800 dark:vno-ring-0 dark:vno-text-slate-300 dark:vno-highlight-white/5 dark:hover:vno-bg-slate-700">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="vno-flex-none vno-text-slate-300 dark:vno-text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
              <span className="vno-flex-auto">Tìm kiếm nhanh...</span>
            </SearchModal>
          </div>
        </div>
      </div>
      <Hero />
    </header>
  )
}
