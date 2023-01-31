import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { FaReact, FaWordpress, FaVuejs } from 'react-icons/fa'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from '@/components/Image'
import styles from './index.module.css'
import classNames from 'classnames'
import { NavItems, NavPopover } from '@/components/Header'
import { ThemeToggle } from '@/components/ThemeToggle'
export const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function Header() {
  return (
    <header className="vno-relative">
      <div className="vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div
          className={classNames(
            'vno-absolute vno-inset-0 vno-bottom-10 vno-bg-bottom vno-bg-no-repeat vno-bg-slate-50 dark:vno-bg-[#0B1120]',
            styles.beams
          )}
        >
          <div
            className="vno-absolute vno-inset-0 vno-bg-grid-slate-900/[0.04] vno-bg-[bottom_1px_center] dark:vno-bg-grid-slate-400/[0.05] dark:vno-bg-bottom dark:vno-border-b dark:vno-border-slate-100/5"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
        <div className="vno-relative vno-flex vno-items-center vno-justify-between vno-pt-6 vno-text-sm vno-font-semibold vno-leading-6 lg:vno-pt-8 vno-text-slate-700 dark:vno-text-slate-200">
          <Image
            src={siteMetadata.siteLogo}
            className="vno-rounded-full"
            alt={siteMetadata.title}
            width={32}
            height={32}
            priority
          />
          <div className="vno-flex vno-items-center">
            <NavPopover className="vno-ml-auto" display="md:vno-hidden" />
            <div className="vno-items-center vno-hidden md:vno-flex">
              <nav>
                <ul className="vno-flex vno-items-center vno-space-x-8">
                  <NavItems />
                </ul>
              </nav>
              <div className="vno-flex vno-items-center vno-pl-6 vno-ml-6 vno-border-l vno-border-slate-200 dark:vno-border-slate-800">
                <ThemeToggle />
                <Link
                  href="https://github.com/vnodesign"
                  className="vno-block vno-ml-6 vno-text-slate-400 hover:vno-text-slate-500 dark:hover:vno-text-slate-300"
                >
                  <span className="vno-sr-only">VNO Design on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="vno-w-5 vno-h-5"
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
        <div className="vno-relative vno-max-w-5xl vno-pt-20 vno-mx-auto sm:vno-pt-24 lg:vno-pt-32">
          <h1 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-center vno-text-slate-900 sm:vno-text-5xl lg:vno-text-6xl dark:vno-text-white">
            Hi, Mình là Đức, mình đang làm việc ở vị trí Front-end Developer.
          </h1>
          <p className="vno-max-w-3xl vno-mx-auto vno-mt-6 vno-text-lg vno-text-center vno-text-slate-600 dark:vno-text-slate-400">
            Blog này mình sẽ chia sẻ các bài viết và các kiến thức mà mình đã áp dụng khi{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              phát triển VPS
            </span>{' '}
            và{' '}
            <span className="vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
              tối ưu Website
            </span>
            .
          </p>
          <div className="vno-flex vno-justify-center vno-mt-6 vno-space-x-6 vno-text-sm sm:vno-mt-10">
            <Link
              href="https://www.facebook.com/tuanduc.support"
              className="vno-flex vno-items-center vno-justify-center vno-w-full vno-h-12 vno-px-6 vno-font-semibold vno-text-white vno-rounded-lg vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-slate-400 focus:vno-ring-offset-2 focus:vno-ring-offset-slate-50 sm:vno-w-auto dark:vno-bg-sky-500 dark:vno-highlight-white/20 dark:hover:vno-bg-sky-400"
              title="Liên hệ Facebook"
            >
              Liên hệ Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="vno-px-4 vno-mx-auto vno-max-w-7xl sm:vno-px-6 md:vno-px-8 vno-mt-20 sm:vno-mt-24 lg:vno-mt-32">
        <Image
          src="/static/google-pagespeed-insights.png"
          width={300}
          height={300}
          alt="Tối ưu điểm Google PageSpeed Insights"
          className="vno-relative vno-w-full vno-max-w-4xl vno-mx-auto vno-border vno-border-gray-300 vno-shadow-2xl vno-rounded-3xl dark:vno-border-gray-700"
          priority
        />
      </div>
    </header>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title} - Front-end Developer`}
        description={siteMetadata.description}
      />
      <div className="vno-mb-20 vno-space-y-20 vno-overflow-hidden sm:vno-mb-32 sm:vno-space-y-32 md:vno-mb-40 md:vno-space-y-40">
        <Header />
        <section className="vno-px-8">
          <div className="vno-mx-auto vno-max-w-8xl">
            <div className="vno-grid vno-grid-cols-1 vno-gap-10 md:vno-grid-cols-3">
              <div className="vno-col-span-2">
                <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
                  <span className="vno-text-transparent vno-bg-gradient-to-r vno-from-blue-400 vno-to-blue-500 vno-bg-clip-text">
                    Mình là ai?
                  </span>
                </h2>
                <div className="vno-mt-6">
                  <p>
                    Mình là một{' '}
                    <span className="vno-text-sky-500 dark:vno-text-sky-400">
                      Front-end Developer
                    </span>
                    {', '}
                    <span className="vno-text-sky-500 dark:vno-text-sky-400">
                      Back-end Developer
                    </span>
                    ,{' và là một '}
                    <span className="vno-text-sky-500 dark:vno-text-sky-400">Designer</span>.
                  </p>
                  <p className="vno-mt-6">
                    Trong hơn 5 năm làm việc với Front-end, Back-end và Design, trải qua nhiều vấp
                    ngã và bầm dập với nghề. Bây giờ, mình chia sẻ lại những kiến thức hay mà mình
                    đúc kết lại trên blog này.
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
      </div>
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
