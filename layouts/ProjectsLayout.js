import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import classNames from 'classnames'
import Image from '@/components/Image'
import formatDate from '@/lib/utils/formatDate'

export default function ProjectsLayout({ frontMatter, next, prev, children }) {
  const { url, date, title, summary, images, tech } = frontMatter

  return (
    <>
      <PageSEO title={`Dự án ${title}`} description={summary} breadcrumb={true} />
      <article>
        <header className="vno-bg-white/95 vno-z-40 supports-backdrop-blur:vno-bg-white/60 vno-backdrop-blur vno-py-4 vno-relative vno-shadow-md vno-shadow-slate-700/5 dark:vno-bg-transparent">
          <div className="vno-max-w-8xl vno-mx-auto vno-px-4 sm:vno-px-6 lg:vno-px-8 vno-grid vno-items-center vno-grid-cols-[1fr,auto,1fr] vno-gap-6">
            <div className="vno-text-center">
              <p className="vno-text-[0.8125rem] vno-leading-6 vno-font-semibold vno-text-sky-500">
                <Link href="/projects" title="Dự án">
                  Dự án
                </Link>
              </p>
              <h1 className="vno-mt-1 vno-text-xl vno-leading-8 vno-tracking-tight vno-font-semibold vno-text-slate-900 dark:vno-text-white">
                {title}
              </h1>
            </div>
            <div className="vno-order-first vno-flex">
              {prev && (
                <Link href={`/projects/${prev.slug}`} className="vno-relative" title={prev.title}>
                  <div className="vno-hidden md:vno-block vno-text-[0.8125rem] vno-leading-6 vno-text-slate-500">
                    <span aria-hidden="true" className="vno-mr-2">
                      ←
                    </span>
                    Trước
                  </div>
                  <div className="vno-hidden md:vno-block vno-mt-2 vno-text-sm vno-leading-6 vno-font-semibold vno-text-slate-900 dark:vno-text-white">
                    {prev.title}
                  </div>
                  <div className="vno-absolute -vno-inset-1 md:vno-hidden" />
                  <svg
                    className="md:vno-hidden vno-w-6 vno-h-6 vno-stroke-slate-900 dark:vno-stroke-white"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.25 8.75 9.75 12l3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
            <div className="vno-flex vno-text-right vno-justify-end">
              {next && (
                <Link href={`/projects/${next.slug}`} className="vno-relative" title={next.title}>
                  <div className="vno-hidden md:vno-block vno-text-[0.8125rem] vno-leading-6 vno-text-slate-500">
                    Kế
                    <span aria-hidden="true" className="vno-ml-2">
                      →
                    </span>
                  </div>
                  <div className="vno-hidden md:vno-block vno-mt-2 vno-text-sm vno-leading-6 vno-font-semibold vno-text-slate-900 dark:vno-text-white">
                    {next.title}
                  </div>
                  <div className="vno-absolute -vno-inset-1 md:vno-hidden" />
                  <svg
                    className="md:vno-hidden vno-w-6 vno-h-6 vno-stroke-slate-900 dark:vno-stroke-white"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m10.75 8.75 3.5 3.25-3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </header>
        {images && (
          <figure className="vno-relative vno-z-20">
            <div className="vno-relative vno-overflow-hidden vno-bg-slate-100 dark:vno-bg-slate-800">
              <div className="vno-absolute vno-inset-x-0 vno-top-0 vno-h-px vno-bg-slate-900/5 dark:vno-bg-slate-100/5" />
              <div className="vno-absolute vno-inset-x-0 vno-bottom-0 vno-h-px vno-bg-slate-900/5 dark:vno-bg-slate-100/5" />
              <div className="vno-mx-auto vno-max-w-8xl">
                <div className="vno-shadow-md vno-ring-1 vno-ring-slate-900/5 vno-shadow-slate-900/10 vno-bg-slate-200">
                  <Image
                    src={images}
                    alt={`Dự án ${title}`}
                    width="1440"
                    height="800"
                    sizes="(min-width: 1440px) 1440px, 100vw"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </figure>
        )}
        <div className="vno-overflow-hidden">
          <div className="vno-relative vno-max-w-8xl vno-py-6 vno-mx-auto vno-px-4 sm:vno-px-6 lg:vno-px-8 vno-flex vno-flex-col sm:vno-flex-row sm:vno-items-center sm:vno-justify-between vno-gap-6">
            <dl className="vno-relative vno-flex vno-flex-wrap vno-h-14 vno-overflow-hidden">
              {[
                ...(tech ? [{ name: 'Công nghệ', value: tech }] : []),
                {
                  name: 'Ngày đăng',
                  value: <time dateTime={date}>{formatDate(date)}</time>,
                },
              ].map((item, itemIndex) => (
                <div
                  key={item.name}
                  className={classNames(
                    itemIndex > 0 &&
                      'vno-border-l vno-border-slate-500/10 dark:vno-border-slate-400/10 vno-ml-6 vno-pl-6 lg:vno-ml-8 lg:vno-pl-8'
                  )}
                >
                  <dt className="vno-text-[0.8125rem] vno-leading-6 vno-font-semibold vno-text-slate-700 dark:vno-text-slate-400">
                    {item.name}
                  </dt>
                  <dd className="vno-mt-2 vno-text-sm vno-leading-6 vno-text-slate-700 dark:vno-text-slate-200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={url}
              className="vno-relative vno-flex-none vno-text-sm vno-text-center vno-font-semibold vno-text-white vno-py-2.5 vno-px-4 vno-rounded-lg vno-bg-slate-900 dark:vno-bg-sky-500 dark:vno-text-white focus:vno-outline-none hover:vno-bg-slate-700 focus:vno-ring-2 focus:vno-ring-slate-400 focus:vno-ring-offset-2 dark:vno-highlight-white/20 dark:hover:vno-bg-sky-400 dark:focus:vno-ring-2 dark:focus:vno-ring-sky-600 dark:focus:vno-ring-offset-slate-900"
            >
              Xem dự án
              <span aria-hidden="true" className="vno-ml-2">
                →
              </span>
            </Link>
          </div>
          <div className="vno-prose vno-prose-slate dark:vno-prose-dark">
            <div className="vno-max-w-8xl vno-mx-auto vno-pt-14 sm:vno-pt-20 md:vno-pt-32 xl:vno-pt-36 vno-mb-20 md:vno-mb-32 vno-px-4 sm:vno-px-6 lg:vno-px-8">
              {children}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
