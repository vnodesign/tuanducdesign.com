import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import classNames from 'classnames'

export default function ListLayout({ posts, title, description }) {
  const displayPosts = posts.filter((frontMatter) => {
    const resultContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return resultContent.toLowerCase()
  })

  return (
    <div className="vno-max-w-[52rem] vno-mx-auto vno-px-4 vno-pb-28 sm:vno-px-6 md:vno-px-8 xl:vno-px-12 lg:vno-max-w-6xl">
      <header className="vno-py-16 sm:vno-text-center">
        <h1 className="vno-mb-4 vno-text-3xl vno-font-extrabold vno-tracking-tight sm:vno-text-4xl vno-text-slate-900 dark:vno-text-slate-200">
          {title}
        </h1>
        <p className="vno-text-lg vno-text-slate-700 dark:vno-text-slate-400">
          {description}
        </p>
      </header>
      <div className="vno-relative sm:vno-pb-12 sm:vno-ml-[calc(2rem+1px)] md:vno-ml-[calc(3.5rem+1px)] lg:vno-ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="vno-hidden vno-absolute vno-top-3 vno-bottom-0 vno-right-full vno-mr-7 md:vno-mr-[3.25rem] vno-w-px vno-bg-slate-200 dark:vno-bg-slate-800 sm:vno-block" />
        <div className="vno-space-y-16">
          {!displayPosts.length && 'Không có bài viết để hiển thị.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <article key={slug} className="vno-relative vno-group">
                <div className="vno-absolute -vno-inset-y-2.5 -vno-inset-x-4 md:-vno-inset-y-4 md:-vno-inset-x-6 sm:vno-rounded-2xl group-hover:vno-bg-slate-50/70 dark:group-hover:vno-bg-slate-800/50" />
                <svg
                  viewBox="0 0 9 9"
                  className="vno-hidden vno-absolute vno-right-full vno-mr-6 vno-top-2 vno-text-slate-200 dark:vno-text-slate-600 md:vno-mr-12 vno-w-[calc(0.5rem+1px)] vno-h-[calc(0.5rem+1px)] vno-overflow-visible sm:vno-block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="vno-fill-white dark:vno-fill-slate-900"
                    strokeWidth={2}
                  />
                </svg>
                <div className="vno-relative">
                  <h3 className="vno-pt-8 vno-text-base vno-font-semibold vno-tracking-tight vno-text-slate-900 dark:vno-text-slate-200 lg:vno-pt-0">
                    {title}
                  </h3>
                  <div className="vno-mt-2 vno-mb-4 vno-prose vno-prose-slate prose-a:vno-relative prose-a:vno-z-10 dark:vno-prose-dark vno-line-clamp-2">
                    {summary}
                  </div>
                  <dl className="vno-absolute vno-left-0 vno-top-0 lg:vno-left-auto lg:vno-right-full lg:vno-mr-[calc(6.5rem+1px)]">
                    <dt className="vno-sr-only">Date</dt>
                    <dd className={classNames('vno-whitespace-nowrap vno-text-sm vno-leading-6 dark:vno-text-slate-400')}>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                </div>
                <Link
                  href={`/blog/${slug}`}
                  className="vno-flex vno-items-center vno-text-sm vno-text-sky-500 vno-font-medium">
                    <span className="vno-absolute -vno-inset-y-2.5 -vno-inset-x-4 md:-vno-inset-y-4 md:-vno-inset-x-6 sm:vno-rounded-2xl"/>
                    <span className="vno-relative">
                      Đọc tiếp
                    </span>
                    <svg
                      className="vno-relative vno-mt-px vno-overflow-visible vno-ml-2.5 vno-text-sky-300 dark:vno-text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
