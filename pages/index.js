import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { FaReact, FaWordpress, FaLaravel } from 'react-icons/fa'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from '@/components/Image'

export const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <PageSEO
        title={`${siteMetadata.title} - Front-end Developer`}
        description={siteMetadata.description}
      />
      <section className="vno-py-4 vno-bg-white lg:vno-pt-20 lg:vno-pb-16 dark:vno-bg-gray-900">
        <div className="vno-max-w-8xl vno-px-4 vno-mx-auto lg:vno-text-center">
          <Link
            className="vno-inline-flex vno-items-center vno-justify-between vno-pl-1 vno-py-1 vno-pr-4 vno-mb-5 vno-text-sm vno-text-gray-700 vno-bg-gray-100 vno-rounded-full dark:vno-bg-gray-800 dark:vno-text-white hover:vno-bg-gray-200"
            role="alert"
            href="/service"
          >
            <span className="vno-text-xs vno-bg-blue-600 vno-rounded-full vno-text-white vno-px-4 vno-py-1.5 vno-mr-3">
              Mới
            </span>
            <span className="vno-mr-2 vno-text-sm vno-font-medium">
              Chào bạn, ở đây mình đang có các dịch vụ mà bạn đang cần tìm này! Xem thêm
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="vno-w-5 vno-h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
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
        </div>
      </section>
      <section className="vno-bg-gray-50 dark:vno-bg-gray-800 vno-py-8 lg:vno-py-16">
        <div className="vno-max-w-screen-xl vno-px-4 vno-mx-auto">
          <h2 className="vno-mb-6 vno-text-3xl vno-font-extrabold vno-tracking-tight vno-leading-tight vno-text-gray-900 lg:vno-text-center dark:vno-text-white md:vno-text-4xl">
            Các dự án đã triển khai
          </h2>
          <p className="vno-mb-10 vno-text-lg vno-font-normal vno-text-gray-500 dark:vno-text-gray-400 lg:vno-text-center lg:vno-text-xl lg:vno-px-64 lg:vno-mb-16">
            Danh sách các dự án mà mình đã triển khai cho cá nhân và khách hàng.
          </p>
          <div className="vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 lg:vno-grid-cols-4 sm:vno-gap-4 xl:vno-gap-8 sm:vno-space-y-0 md:vno-mt-12">
            <Link
              href="https://hr.penci.me"
              className="vno-block vno-py-12 vno-px-8 vno-text-center vno-bg-white vno-rounded-lg vno-border vno-border-gray-200 vno-shadow-sm dark:vno-bg-gray-700 dark:vno-border-gray-600 hover:vno-shadow-lg"
            >
              <FaReact className="vno-mx-auto vno-w-12 vno-h-12 vno-text-[#61dafb]" />
              <h3 className="vno-font-semibold vno-text-xl vno-text-gray-900 dark:vno-text-white vno-mt-3.5">
                HR Documentation
              </h3>
            </Link>
            <Link
              href="https://penci.me"
              className="vno-block vno-py-12 vno-px-8 vno-text-center vno-bg-white vno-rounded-lg vno-border vno-border-gray-200 vno-shadow-sm dark:vno-bg-gray-700 dark:vno-border-gray-600 hover:vno-shadow-lg"
            >
              <FaWordpress className="vno-mx-auto vno-w-12 vno-h-12 vno-text-[#00749c]" />
              <h3 className="vno-font-semibold vno-text-xl vno-text-gray-900 dark:vno-text-white vno-mt-3.5">
                Penci Design
              </h3>
            </Link>
            <Link
              href="https://lachongvien.vn"
              className="vno-block vno-py-12 vno-px-8 vno-text-center vno-bg-white vno-rounded-lg vno-border vno-border-gray-200 vno-shadow-sm dark:vno-bg-gray-700 dark:vno-border-gray-600 hover:vno-shadow-lg"
            >
              <FaLaravel className="vno-mx-auto vno-w-12 vno-h-12 vno-text-[#F05340]" />
              <h3 className="vno-font-semibold vno-text-xl vno-text-gray-900 dark:vno-text-white vno-mt-3.5">
                Lạc Hồng Viên
              </h3>
            </Link>
            <Link
              href="https://dothotot.vn"
              className="vno-block vno-py-12 vno-px-8 vno-text-center vno-bg-white vno-rounded-lg vno-border vno-border-gray-200 vno-shadow-sm dark:vno-bg-gray-700 dark:vno-border-gray-600 hover:vno-shadow-lg"
            >
              <FaWordpress className="vno-mx-auto vno-w-12 vno-h-12 vno-text-[#00749c]" />
              <h3 className="vno-font-semibold vno-text-xl vno-text-gray-900 dark:vno-text-white vno-mt-3.5">
                Đồ Thờ Tốt
              </h3>
            </Link>
          </div>
        </div>
      </section>
      <section className="vno-bg-white dark:vno-bg-gray-900 vno-py-8 lg:vno-py-16">
        <div className="vno-max-w-screen-xl vno-px-4 vno-mx-auto">
          <h2 className="vno-mb-6 vno-text-3xl vno-font-extrabold vno-tracking-tight vno-leading-tight vno-text-gray-900 lg:vno-text-center dark:vno-text-white md:vno-text-4xl">
            Bài viết mới đăng
          </h2>
          <div className="vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 lg:vno-grid-cols-3 sm:vno-gap-4 xl:vno-gap-8 sm:vno-space-y-0 md:vno-mt-12">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, title, summary, images } = frontMatter
              return (
                <article
                  key={slug}
                  className="vno-h-full vno-bg-gray-50 vno-border vno-border-gray-200 vno-rounded-lg vno-shadow-md dark:vno-bg-gray-800 dark:vno-border-gray-700"
                >
                  <div className="vno-flex-shrink-0">
                    <Link href={`/blog/${slug}`} title={title}>
                      <Image
                        className="vno-object-cover vno-w-full vno-aspect-video"
                        src={images}
                        alt={title}
                        width={1600}
                        height={1200}
                      />
                    </Link>
                  </div>
                  <div className="vno-relative vno-flex vno-flex-col vno-justify-between vno-flex-1 vno-p-5">
                    <div className="vno-flex-1">
                      <Link href={`/blog/${slug}`} className="vno-block">
                        <h3 className="vno-mb-2 vno-text-2xl vno-font-bold vno-tracking-tight vno-text-gray-900 dark:vno-text-white">
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
    </div>
  )
}
