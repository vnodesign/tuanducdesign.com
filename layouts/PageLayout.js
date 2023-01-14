import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function PageLayout({ frontMatter, children }) {
  const { title, summary } = frontMatter

  return (
    <>
      <PageSEO title={title} description={summary} breadcrumb={true} />
      <div className="vno-max-w-8xl vno-mx-auto">
        <div className="vno-flex vno-px-4 vno-pt-8 vno-pb-10 lg:vno-px-8">
          <Link
            href="/blog"
            className="vno-group vno-flex vno-font-semibold vno-text-sm vno-leading-6 vno-text-slate-700 hover:vno-text-slate-900 dark:vno-text-slate-200 dark:hover:vno-text-white"
          >
            <svg
              viewBox="0 -9 3 24"
              className="vno-overflow-visible vno-mr-3 vno-text-slate-400 vno-w-auto vno-h-6 group-hover:vno-text-slate-600 dark:group-hover:vno-text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Quay lại
          </Link>
        </div>
      </div>
      <div className="vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div className="vno-max-w-3xl vno-mx-auto vno-pb-28">
          <main>
            <article className="vno-relative vno-pt-10">
              <h1 className="vno-text-2xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-slate-200 md:vno-text-3xl">
                {title}
              </h1>
              <div className="vno-prose vno-prose-slate dark:vno-prose-dark">{children}</div>
            </article>
          </main>
        </div>
      </div>
    </>
  )
}
