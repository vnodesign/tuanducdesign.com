import gtagTrack from '@/lib/utils/gtag'
import Link from '@/components/Link'
import Image from '@/components/Image'

export default function LatestPosts({ posts, totalPages }) {
  return (
    <section className="vno-relative vno-my-10 vno-py-10 md:vno-my-20">
      <div className="vno-mx-auto vno-max-w-7xl vno-px-4 md:vno-px-5">
        <h2 className="vno-text-3xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-slate-50 sm:vno-text-4xl">
          Bài viết mới đăng
        </h2>
        <div className="vno-mt-10 vno-grid vno-grid-cols-1 vno-items-start vno-gap-y-10 vno-gap-x-6 md:vno-grid-cols-3 xl:vno-grid-cols-3">
          {posts.slice(0, totalPages).map((frontMatter) => {
            const { slug, title, summary, images } = frontMatter
            return (
              <article
                key={slug}
                className="vno-h-full vno-rounded-lg vno-bg-white vno-shadow-xl dark:vno-bg-slate-800"
              >
                <div className="vno-flex-shrink-0">
                  <Link
                    href={`/blog/${slug}`}
                    title={title}
                    onClick={() => gtagTrack('ImageLink', `/blog/${slug}`)}
                  >
                    <Image
                      className="vno-aspect-video vno-w-full vno-object-cover"
                      src={images}
                      alt={title}
                      width={450}
                      height={220}
                      sizes="(max-width 450px) 80vw, 50vw"
                    />
                  </Link>
                </div>
                <div className="vno-relative vno-flex vno-flex-1 vno-flex-col vno-justify-between vno-p-5">
                  <div className="vno-flex-1">
                    <Link
                      href={`/blog/${slug}`}
                      className="vno-block"
                      title={title}
                      onClick={() => gtagTrack('HeadingLink', `/blog/${slug}`)}
                    >
                      <h3 className="vno-mb-2 vno-text-sm vno-font-bold vno-tracking-tight vno-text-gray-900 dark:vno-text-white">
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
