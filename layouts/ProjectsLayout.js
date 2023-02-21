import gtagTrack from '@/lib/utils/gtag'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import clsx from 'clsx'
import Image from '@/components/Image'
import formatDate from '@/lib/utils/formatDate'

export default function ProjectsLayout({ frontMatter, next, prev, children }) {
  const { url, date, title, summary, images, tech, projectsStatus } = frontMatter

  return (
    <>
      <PageSEO title={`Dự án ${title}`} description={summary} breadcrumb={true} />
      <article className="vno-pb-20 sm:vno-pb-32">
        <header className="vno-relative vno-z-40 vno-bg-white/95 vno-py-4 vno-shadow-md vno-shadow-slate-700/5 vno-backdrop-blur supports-backdrop-blur:vno-bg-white/60 dark:vno-bg-transparent">
          <div className="vno-mx-auto vno-grid vno-max-w-8xl vno-grid-cols-[1fr,auto,1fr] vno-items-center vno-gap-6 vno-px-4 sm:vno-px-6 lg:vno-px-8">
            <div className="vno-text-center">
              <p className="vno-text-[0.8125rem] vno-font-semibold vno-leading-6 vno-text-sky-500">
                <Link
                  href="/projects"
                  title="Dự án"
                  onClick={() => gtagTrack('ProjectsLink', '/projects')}
                >
                  Dự án
                </Link>
              </p>
              <h1 className="vno-mt-1 vno-text-xl vno-font-semibold vno-leading-8 vno-tracking-tight vno-text-slate-900 dark:vno-text-white">
                {title}
              </h1>
            </div>
            <div className="vno-order-first vno-flex">
              {prev && (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="vno-relative"
                  title={prev.title}
                  onClick={() => gtagTrack('PrevProjectsLink', `/projects/${prev.slug}`)}
                >
                  <div className="vno-hidden vno-text-[0.8125rem] vno-leading-6 vno-text-slate-500 md:vno-block">
                    <span aria-hidden="true" className="vno-mr-2">
                      ←
                    </span>
                    Trước
                  </div>
                  <div className="vno-mt-2 vno-hidden vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-900 dark:vno-text-white md:vno-block">
                    {prev.title}
                  </div>
                  <div className="vno-absolute -vno-inset-1 md:vno-hidden" />
                  <svg
                    className="vno-h-6 vno-w-6 vno-stroke-slate-900 dark:vno-stroke-white md:vno-hidden"
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
            <div className="vno-flex vno-justify-end vno-text-right">
              {next && (
                <Link
                  href={`/projects/${next.slug}`}
                  className="vno-relative"
                  title={next.title}
                  onClick={() => gtagTrack('NextProjectsLink', `/projects/${next.slug}`)}
                >
                  <div className="vno-hidden vno-text-[0.8125rem] vno-leading-6 vno-text-slate-500 md:vno-block">
                    Kế
                    <span aria-hidden="true" className="vno-ml-2">
                      →
                    </span>
                  </div>
                  <div className="vno-mt-2 vno-hidden vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-900 dark:vno-text-white md:vno-block">
                    {next.title}
                  </div>
                  <div className="vno-absolute -vno-inset-1 md:vno-hidden" />
                  <svg
                    className="vno-h-6 vno-w-6 vno-stroke-slate-900 dark:vno-stroke-white md:vno-hidden"
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
                <div className="vno-bg-slate-200 vno-shadow-md vno-shadow-slate-900/10 vno-ring-1 vno-ring-slate-900/5">
                  <Image
                    src={images}
                    alt={title}
                    width="1440"
                    height="800"
                    sizes="(min-width: 1440px) 1440px, 100vw"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </div>
          </figure>
        )}
        <div className="vno-overflow-hidden">
          <div className="vno-relative vno-mx-auto vno-flex vno-max-w-8xl vno-flex-col vno-gap-6 vno-py-6 vno-px-4 sm:vno-flex-row sm:vno-items-center sm:vno-justify-between sm:vno-px-6 lg:vno-px-8">
            <Image
              src={require('@/img/projects/beams-2@75.jpg')}
              alt="Background Light"
              className="vno-pointer-events-none vno-absolute vno-top-[-20rem] vno-left-1/2 vno-ml-[-35rem] vno-w-[119.4375rem] vno-max-w-none dark:vno-hidden sm:vno-top-[-25rem]"
              unoptimized
            />
            <Image
              src={require('@/img/projects/beams-2-dark@75.jpg')}
              alt="Background Dark"
              className="vno-pointer-events-none vno-absolute vno-top-0 vno-right-[-12rem] vno-hidden vno-w-[70.0625rem] vno-max-w-none dark:vno-block md:vno-right-0"
              unoptimized
            />
            <dl className="vno-relative vno-flex vno-h-14 vno-flex-wrap vno-overflow-hidden">
              {[
                ...(tech ? [{ name: 'Công nghệ', value: tech }] : []),
                {
                  name: 'Phát triển lúc',
                  value: <time dateTime={date}>{formatDate(date)}</time>,
                },
                {
                  name: 'Trạng thái dự án',
                  value: <>{projectsStatus}</>,
                },
              ].map((item, itemIndex) => (
                <div
                  key={item.name}
                  className={clsx(
                    itemIndex > 0 &&
                      'vno-ml-6 vno-border-l vno-border-slate-500/10 vno-pl-6 dark:vno-border-slate-400/10 lg:vno-ml-8 lg:vno-pl-8'
                  )}
                >
                  <dt className="vno-text-[0.8125rem] vno-font-semibold vno-leading-6 vno-text-slate-700 dark:vno-text-slate-400">
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
              className="vno-relative vno-flex-none vno-rounded-lg vno-bg-slate-900 vno-py-2.5 vno-px-4 vno-text-center vno-text-sm vno-font-semibold vno-text-white hover:vno-bg-slate-700 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-slate-400 focus:vno-ring-offset-2 dark:vno-bg-sky-500 dark:vno-text-white dark:vno-highlight-white/20 dark:hover:vno-bg-sky-400 dark:focus:vno-ring-2 dark:focus:vno-ring-sky-600 dark:focus:vno-ring-offset-slate-900"
            >
              Xem dự án
              <span aria-hidden="true" className="vno-ml-2">
                →
              </span>
            </Link>
          </div>
          <div className="vno-relative [&>:first-child]:!vno-mt-0 [&>:last-child]:!vno-mb-0">
            <div className="vno-mx-auto vno-mb-20 vno-max-w-8xl vno-px-4 vno-pt-14 sm:vno-px-6 sm:vno-pt-20 md:vno-mb-32 md:vno-pt-32 lg:vno-px-8 xl:vno-pt-36">
              <div className="vno-mt-4 vno-max-w-3xl vno-prose vno-prose-slate dark:vno-prose-dark">
                {children}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
