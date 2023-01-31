import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import classNames from 'classnames'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  return (
    <>
      <BlogSEO
        title={frontMatter.title}
        summary={frontMatter.summary}
        date={frontMatter.date}
        lastmod={frontMatter.lastmod}
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        authorDetails={authorDetails}
        images={frontMatter.images}
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
                {frontMatter.title}
              </h1>
              <div className="vno-text-sm vno-leading-6">
                <dl>
                  <dt className="vno-sr-only">Date</dt>
                  <dd className="vno-absolute vno-inset-x-0 vno-top-0 vno-text-slate-700 dark:vno-text-slate-400">
                    <time dateTime={frontMatter.date}>{formatDate(frontMatter.date)}</time>
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
              <div className="vno-mt-12 vno-prose vno-prose-slate dark:vno-prose-dark">
                {children}
              </div>
            </article>
          </main>
          <footer
            className={classNames(
              'vno-text-sm vno-leading-6',
              prev || next ? 'vno-mt-12' : 'vno-mt-16'
            )}
          >
            {frontMatter.tags && (
              <div className="vno-flex vno-flex-wrap">
                {frontMatter.tags.map((tag) => (
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
