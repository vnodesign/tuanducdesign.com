import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { FaReact, FaWordpress, FaVuejs } from 'react-icons/fa'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from '@/components/Image'

export const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title} - Front-end Developer`}
        description={siteMetadata.description}
      />
      <section className="vno-relative vno-py-4 lg:vno-pt-20 lg:vno-pb-16">
        <div className="vno-max-w-8xl vno-px-4 vno-mx-auto lg:vno-text-center">
          <h1 className="vno-mb-4 vno-text-4xl vno-font-bold vno-tracking-tight vno-text-gray-900 lg:vno-font-extrabold lg:vno-text-6xl lg:vno-leading-none dark:vno-text-white lg:vno-text-center xl:vno-px-36 lg:vno-mb-7">
            Hi, Mình là Đức, mình đang làm việc ở vị trí{' '}
            <span className="vno-font-bold vno-text-sky-500 dark:vno-text-sky-400">
              Front-end Developer
            </span>
          </h1>
          <p className="vno-mb-10 vno-text-lg vno-font-normal vno-text-gray-500 dark:vno-text-gray-400 lg:vno-text-center lg:vno-text-xl xl:vno-px-60">
            Blog này mình sẽ chia sẻ các bài viết và các kiến thức mà mình đã áp dụng khi phát triển
            VPS và tối ưu Website.
          </p>
          <div className="vno-flex vno-flex-col vno-mb-8 md:vno-flex-row lg:vno-justify-center">
            <Link
              href="https://www.facebook.com/tuanduc.support"
              className="vno-text-white vno-bg-blue-600 hover:vno-bg-blue-700 focus:vno-ring-4 focus:vno-ring-blue-300 dark:focus:vno-ring-blue-800 vno-font-medium vno-rounded-lg vno-text-base vno-px-6 vno-py-2.5 vno-text-center md:vno-mr-5 vno-mb-3 md:vno-mb-0 vno-inline-flex vno-items-center vno-justify-center"
            >
              Kết nối với mình trên Facebook
            </Link>
            <Link
              href="https://github.com/tuanducdesign/"
              className="vno-text-gray-600 vno-bg-white-100 hover:vno-bg-gray-100 hover:vno-text-blue-600 vno-border vno-border-gray-200 dark:vno-text-gray-400 dark:hover:vno-bg-gray-700 dark:hover:vno-text-white dark:vno-border-gray-600 vno-font-medium vno-rounded-lg vno-text-base vno-px-6 vno-py-2.5 vno-text-center vno-inline-flex vno-justify-center vno-items-center"
            >
              Theo dõi mình trên GitHub
            </Link>
          </div>
          <div>
            <Image
              src="/static/google-pagespeed-insights.png"
              width={300}
              height={300}
              alt="Tối ưu điểm Google PageSpeed Insights"
              className="vno-relative vno-w-full vno-max-w-4xl vno-mx-auto vno-mt-12 lg:vno-mt-20 vno-border vno-border-gray-300 vno-shadow-2xl vno-rounded-3xl dark:vno-border-gray-700"
              priority
            />
          </div>
        </div>
      </section>
      <section className="vno-relative vno-py-10 vno-my-10 md:vno-my-20">
        <div>
          <div className="vno-absolute vno-inset-x-0 vno-top-0 vno-hidden vno-h-[37.5rem] vno-bg-gradient-to-b vno-from-[#0c1120] dark:vno-block"></div>
          <div className="vno-bg-grid-slate-900/[0.04] dark:vno-bg-grid-slate-100/[0.03] vno-absolute vno-inset-x-0 vno-top-0 vno-h-[37.5rem] vno-bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:vno-bg-[center_top_-1px]"></div>
        </div>
        <div className="vno-relative vno-px-4 vno-mx-auto vno-max-w-8xl md:vno-px-5">
          <div className="vno-grid vno-grid-cols-1 vno-gap-10 md:vno-grid-cols-3">
            <div className="vno-col-span-2">
              <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
                <span className="vno-text-transparent vno-bg-gradient-to-r vno-from-blue-400 vno-to-blue-500 vno-bg-clip-text">
                  Mình là ai?
                </span>
              </h2>
              <div className="vno-mt-10">
                <p>
                  Mình là một{' '}
                  <span className="vno-text-sky-500 dark:vno-text-sky-400">
                    Front-end Developer
                  </span>
                  {', '}
                  <span className="vno-text-sky-500 dark:vno-text-sky-400">Back-end Developer</span>
                  ,{' và là một '}
                  <span className="vno-text-sky-500 dark:vno-text-sky-400">Designer</span>.
                </p>
                <p className="vno-mt-6">
                  Trong hơn 5 năm làm việc với Front-end, Back-end và Design, trải qua nhiều vấp ngã
                  và bầm dập với nghề. Bây giờ, mình chia sẻ lại những kiến thức hay mà mình đúc kết
                  lại trên blog này.
                </p>
                <p className="vno-mt-6">
                  Nội dung trên blog đa dạng chủ đề từ{' '}
                  <span className="vno-text-sky-500 dark:vno-text-sky-400">Phát triển VPS</span>
                  {', '}
                  <span className="vno-text-indigo-500 dark:vno-text-indigo-400">
                    Tối ưu Website
                  </span>
                  {', '}
                  <span className="vno-text-pink-500 dark:vno-text-pink-400">Networking</span>
                  {', '}
                  <span className="vno-text-cyan-500 dark:vno-text-cyan-400">Design</span>...
                </p>
              </div>
            </div>
            <div className="vno-col-span-2 md:vno-col-span-1">
              <Image
                alt="Avatar"
                src="/static/avatar-author.png"
                width="960"
                height="1280"
                className="vno-w-full vno-h-auto vno-aspect-video vno-rounded-2xl vno-object-cover"
                priority
              />
            </div>
          </div>
          <div className="vno-mt-20 vno-grid vno-grid-cols-1 vno-gap-10 md:vno-grid-cols-3">
            <div className="vno-col-span-2">
              <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
                <span className="vno-text-transparent vno-bg-gradient-to-r vno-from-pink-400 vno-to-pink-500 vno-bg-clip-text">
                  Dự án cá nhân
                </span>
              </h2>
              <div className="vno-flex vno-mt-10">
                <FaReact className="vno-w-10 vno-h-10 vno-mr-5 vno-text-blue-500" />
                <FaVuejs className="vno-w-10 vno-h-10 vno-mr-5 vno-text-green-400" />
                <FaWordpress className="vno-w-10 vno-h-10 vno-mr-5 vno-text-[#00749c]" />
              </div>
              <div className="vno-mt-10">
                <p className="vno-mt-6">
                  Phần lớn thời gian mình dành cho việc xây dựng các sản phẩm trên Vue.js và
                  WordPress.
                </p>
                <p className="vno-mt-6">
                  Thời gian gần đây mình có tìm hiểu thêm về Next.js một Framework được xây dựng
                  trên thư viện React.js, để xây dựng các dự án phức tạp hơn.
                </p>
              </div>
            </div>
            <div className="vno-col-span-2 md:vno-col-span-1">
              <div className="vno-mx-auto vno-max-w-8xl vno-mb-5 last:vno-mb-0 vno-border vno-border-gray-200 vno-rounded-lg vno-shadow-md vno-bg-white/50 vno-backdrop-blur dark:vno-border-gray-700 dark:vno-bg-gray-800/70">
                <div className="vno-p-5">
                  <Link href="https://tuanducdesign.com/" title="Blog cá nhân">
                    <h5 className="vno-mb-2 vno-text-2xl vno-font-bold vno-tracking-tight vno-text-gray-900 dark:vno-text-white">
                      Blog cá nhân
                    </h5>
                  </Link>
                  <p className="vno-mb-3 vno-font-normal vno-text-gray-700 dark:vno-text-gray-400">
                    Dự án này mình sử dụng thư viện React.js, Framework Next.js và CSS framework
                    TailwindCSS.
                  </p>
                  <Link
                    href="https://tuanducdesign.com/"
                    title="Xem thêm dự án Blog cá nhân"
                    className="vno-inline-flex vno-items-center vno-px-3 vno-py-2 vno-text-sm vno-font-medium vno-text-center vno-text-white vno-bg-blue-700 vno-rounded-lg hover:vno-bg-blue-800 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-blue-300 dark:vno-bg-blue-600 dark:hover:vno-bg-blue-700 dark:focus:vno-ring-blue-800"
                  >
                    Xem thêm
                    <svg
                      aria-hidden="true"
                      className="vno-w-4 vno-h-4 vno-ml-2 -vno-mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="vno-mx-auto vno-max-w-8xl vno-mb-5 last:vno-mb-0 vno-border vno-border-gray-200 vno-rounded-lg vno-shadow-md vno-bg-white/50 vno-backdrop-blur dark:vno-border-gray-700 dark:vno-bg-gray-800/70">
                <div className="vno-p-5">
                  <Link href="https://cv.tuanducdesign.com/" title="Portfolio & Resume">
                    <h5 className="vno-mb-2 vno-text-2xl vno-font-bold vno-tracking-tight vno-text-gray-900 dark:vno-text-white">
                      Portfolio & Resume
                    </h5>
                  </Link>
                  <p className="vno-mb-3 vno-font-normal vno-text-gray-700 dark:vno-text-gray-400">
                    Dự án này mình sử dụng Vite.js, Framework Vue.js và CSS framework TailwindCSS.
                  </p>
                  <Link
                    href="https://cv.tuanducdesign.com/"
                    title="Xem thêm dự án Portfolio & Resume"
                    className="vno-inline-flex vno-items-center vno-px-3 vno-py-2 vno-text-sm vno-font-medium vno-text-center vno-text-white vno-bg-blue-700 vno-rounded-lg hover:vno-bg-blue-800 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-blue-300 dark:vno-bg-blue-600 dark:hover:vno-bg-blue-700 dark:focus:vno-ring-blue-800"
                  >
                    Xem thêm
                    <svg
                      aria-hidden="true"
                      className="vno-w-4 vno-h-4 vno-ml-2 -vno-mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div className="vno-mt-12 vno-grid vno-grid-cols-1 vno-gap-12 md:vno-grid-cols-2 lg:vno-grid-cols-3">
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, title, summary, images } = frontMatter
              return (
                <article
                  key={slug}
                  className="vno-h-full vno-bg-white vno-rounded-lg vno-shadow-xl dark:vno-bg-slate-800"
                >
                  <div className="vno-flex-shrink-0">
                    <Link href={`/blog/${slug}`} title={title}>
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
                      <Link href={`/blog/${slug}`} className="vno-block" title={title}>
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
    </>
  )
}
