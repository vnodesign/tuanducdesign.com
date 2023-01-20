import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import classNames from 'classnames'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, lastmod, title, summary, images, tags } = frontMatter
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString())
  }

  return (
    <>
      <BlogSEO
        title={title}
        summary={summary}
        date={date}
        lastmod={lastmod}
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        images={images}
      />
      <div className="vno-mx-auto vno-max-w-8xl">
        <div className="vno-flex vno-px-4 vno-pt-8 vno-pb-10 lg:vno-px-8">
          <Link
            href="/blog"
            className="vno-group vno-flex vno-text-sm vno-font-semibold vno-leading-6 vno-text-slate-700 hover:vno-text-slate-900 dark:vno-text-slate-200 dark:hover:vno-text-white"
            title="Quay lại Blog"
          >
            <svg
              viewBox="0 -9 3 24"
              className="vno-mr-3 vno-h-6 vno-w-auto vno-overflow-visible vno-text-slate-400 group-hover:vno-text-slate-600 dark:group-hover:vno-text-slate-300"
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
        <div className="vno-mx-auto vno-max-w-3xl vno-pb-28">
          <main>
            <article className="vno-relative vno-pt-10">
              <h1 className="vno-text-2xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-slate-200 md:vno-text-3xl">
                {title}
              </h1>
              <div className="vno-text-sm vno-leading-6">
                <dl>
                  <dt className="vno-sr-only">Ngày đăng</dt>
                  <dd className="vno-absolute vno-inset-x-0 vno-top-0 vno-text-slate-700 dark:vno-text-slate-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
              </div>
              <div className="vno-mt-6">
                <ul className="-vno-mx-5 -vno-mt-6 vno-flex vno-flex-wrap vno-text-sm vno-leading-6">
                  <li className="vno-mt-6 vno-flex vno-items-center vno-whitespace-nowrap vno-px-5 vno-font-medium">
                    {authorDetails.avatar && (
                      <Image
                        src={authorDetails.avatar}
                        width="34"
                        height="34"
                        alt={authorDetails.name}
                        className="vno-rounded-full vno-bg-slate-50 dark:vno-bg-slate-800 vno-h-9 vno-w-9"
                      />
                    )}
                    <div className="vno-ml-3 vno-text-sm vno-leading-4">
                      <div className="vno-text-slate-900 dark:vno-text-slate-200">
                        {authorDetails.name}
                      </div>
                      <div className="vno-mt-1">
                        {authorDetails.twitter && (
                          <Link
                            href={authorDetails.twitter}
                            className="vno-text-sky-500 hover:vno-text-sky-600 dark:hover:vno-text-sky-400"
                            title={authorDetails.name}
                          >
                            {authorDetails.twitter.replace('https://twitter.com/', '@')}
                          </Link>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="vno-my-10 vno-flex vno-items-center vno-justify-between">
                <aside>
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${title} ${siteMetadata.siteUrl}/blog/${slug}`}
                    className="vno-mr-2 vno-inline-flex vno-items-center vno-rounded-lg vno-border vno-border-gray-200 vno-bg-white vno-px-3 vno-py-2 vno-text-xs vno-font-medium vno-text-gray-900 vno-no-underline hover:vno-bg-gray-100 hover:vno-text-gray-700 focus:vno-z-10 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-gray-200 dark:vno-border-gray-600 dark:vno-bg-gray-800 dark:vno-text-gray-400 dark:hover:vno-bg-gray-700 dark:hover:vno-text-white dark:focus:vno-ring-gray-700"
                    title={`Chia sẻ lên Twitter`}
                  >
                    <svg
                      className="vno-mr-2 vno-h-4 vno-w-4"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>{' '}
                    Twitter
                  </Link>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${siteMetadata.siteUrl}/blog/${slug}`}
                    className="vno-mr-2 vno-inline-flex vno-items-center vno-rounded-lg vno-border vno-border-gray-200 vno-bg-white vno-px-3 vno-py-2 vno-text-xs vno-font-medium vno-text-gray-900 vno-no-underline hover:vno-bg-gray-100 hover:vno-text-gray-700 focus:vno-z-10 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-gray-200 dark:vno-border-gray-600 dark:vno-bg-gray-800 dark:vno-text-gray-400 dark:hover:vno-bg-gray-700 dark:hover:vno-text-white dark:focus:vno-ring-gray-700"
                    title={`Chia sẻ lên Facebook`}
                  >
                    <svg
                      className="vno-mr-2 vno-h-4 vno-w-4"
                      fill="currentColor"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>{' '}
                    Facebook
                  </Link>
                  <button
                    type="button"
                    className="vno-mr-2 vno-inline-flex vno-items-center vno-rounded-lg vno-border vno-border-gray-200 vno-bg-white vno-px-3 vno-py-2 vno-text-xs vno-font-medium vno-text-gray-900 vno-no-underline hover:vno-bg-gray-100 hover:vno-text-gray-700 focus:vno-z-10 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-gray-200 dark:vno-border-gray-600 dark:vno-bg-gray-800 dark:vno-text-gray-400 dark:hover:vno-bg-gray-700 dark:hover:vno-text-white dark:focus:vno-ring-gray-700"
                    onClick={copyToClipboard}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="vno-mr-2 vno-h-4 vno-w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>{' '}
                    Sao chép URL
                  </button>
                </aside>
              </div>
              <div className="vno-prose vno-prose-slate dark:vno-prose-dark">{children}</div>
            </article>
          </main>
          <footer
            className={classNames(
              'vno-text-sm vno-leading-6',
              prev || next ? 'vno-mt-12' : 'vno-mt-16'
            )}
          >
            {tags && (
              <div className="vno-flex vno-flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            )}
            {(next || prev) && (
              <div className="vno-pt-10 vno-flex vno-items-center vno-font-semibold vno-text-slate-700 dark:vno-text-slate-200">
                {prev && (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="vno-mr-8 vno-flex hover:vno-text-slate-900 dark:hover:vno-text-white"
                    title={prev.title}
                  >
                    <span aria-hidden="true" className="vno-mr-2">
                      ←
                    </span>
                    {prev.title}
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="vno-ml-auto vno-flex vno-text-right hover:vno-text-slate-900 dark:hover:vno-text-white"
                    title={next.title}
                  >
                    {next.title}
                    <span aria-hidden="true" className="vno-ml-2">
                      →
                    </span>
                  </Link>
                )}
              </div>
            )}
          </footer>
        </div>
      </div>
    </>
  )
}
