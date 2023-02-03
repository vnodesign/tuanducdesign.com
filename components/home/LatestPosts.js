import gtagTrack from '@/lib/utils/gtag'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function LatestPosts({ posts, totalPages }) {
  return (
    <section className="vno-relative vno-py-10 vno-my-10 md:vno-my-20">
      <div>
        <div className="vno-absolute vno-inset-x-0 vno-top-0 vno-hidden vno-h-[37.5rem] vno-bg-gradient-to-b vno-from-[#0c1120] dark:vno-block"></div>
        <div className="vno-bg-grid-slate-900/[0.04] dark:vno-bg-grid-slate-100/[0.03] vno-absolute vno-inset-x-0 vno-top-0 vno-h-[37.5rem] vno-bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:vno-bg-[center_top_-1px]"></div>
      </div>
      <div className="vno-relative vno-mx-auto vno-max-w-8xl vno-px-4 md:vno-px-5">
        <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
          <span className="vno-bg-gradient-to-r vno-from-sky-400 vno-to-sky-500 vno-bg-clip-text vno-text-transparent">
            Bài viết mới đăng
          </span>
        </h2>
        <div className="vno-mt-10 vno-grid vno-grid-cols-1 xl:vno-grid-cols-3 vno-gap-y-10 vno-gap-x-6 vno-items-start">
          {posts.slice(0, totalPages).map((frontMatter) => {
            const { slug, title, summary, images } = frontMatter
            return (
              <article
                key={slug}
                className="vno-h-full vno-bg-white vno-rounded-lg vno-shadow-xl dark:vno-bg-slate-800"
              >
                <div className="vno-flex-shrink-0">
                  <Link
                    href={`/blog/${slug}`}
                    title={title}
                    onClick={() => gtagTrack('ImageLink', `/blog/${slug}`)}
                  >
                    <Image
                      className="vno-object-cover vno-w-full vno-aspect-video"
                      src={images}
                      alt={title}
                      width={450}
                      height={220}
                    />
                  </Link>
                </div>
                <div className="vno-relative vno-flex vno-flex-col vno-justify-between vno-flex-1 vno-p-5">
                  <div className="vno-flex-1">
                    <Link
                      href={`/blog/${slug}`}
                      className="vno-block"
                      title={title}
                      onClick={() => gtagTrack('HeadingLink', `/blog/${slug}`)}
                    >
                      <h3 className="vno-mb-2 vno-text-xl vno-font-bold vno-tracking-tight vno-text-gray-900 dark:vno-text-white">
                        {title}
                      </h3>
                    </Link>
                    <p className="vno-mb-3 vno-font-normal vno-text-gray-700 dark:vno-text-gray-400">
                      {summary}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
