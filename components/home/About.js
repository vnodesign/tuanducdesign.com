import Link from '@/components/Link'
import { FaReact, FaWordpress, FaVuejs } from 'react-icons/fa'
import Image from '@/components/Image'

export default function About() {
  return (
    <section className="vno-mt-20 vno-px-8 sm:vno-mt-32 md:vno-mt-40">
      <div className="vno-mx-auto vno-max-w-7xl">
        <div className="vno-grid vno-grid-cols-1 vno-gap-10 md:vno-grid-cols-3">
          <div className="vno-col-span-2">
            <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
              <span className="vno-bg-gradient-to-r vno-from-blue-400 vno-to-blue-500 vno-bg-clip-text vno-text-transparent">
                Mình là ai?
              </span>
            </h2>
            <div className="vno-mt-6 vno-text-lg">
              <p>
                Mình là một{' '}
                <span className="vno-text-sky-500 dark:vno-text-sky-400">Front-end Developer</span>
                {', '}
                <span className="vno-text-sky-500 dark:vno-text-sky-400">Back-end Developer</span>,
                {' và là một '}
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
                <span className="vno-text-indigo-500 dark:vno-text-indigo-400">Tối ưu Website</span>
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
              className="vno-aspect-video vno-h-auto vno-w-full vno-rounded-lg vno-object-cover"
              sizes="(max-width 960px) 80vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="vno-mt-20 vno-grid vno-grid-cols-1 vno-gap-10 md:vno-grid-cols-3">
          <div className="vno-col-span-2">
            <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-slate-900 dark:vno-text-white sm:vno-text-5xl">
              <span className="vno-bg-gradient-to-r vno-from-pink-400 vno-to-pink-500 vno-bg-clip-text vno-text-transparent">
                Dự án cá nhân
              </span>
            </h2>
            <div className="vno-mt-10 vno-flex">
              <FaReact className="vno-mr-5 vno-h-10 vno-w-10 vno-text-blue-500" />
              <FaVuejs className="vno-mr-5 vno-h-10 vno-w-10 vno-text-green-400" />
              <FaWordpress className="vno-mr-5 vno-h-10 vno-w-10 vno-text-[#00749c]" />
            </div>
            <div className="vno-mt-10 vno-text-lg">
              <p>
                Phần lớn thời gian mình dành cho việc xây dựng các sản phẩm trên{' '}
                <Link
                  href="https://vuejs.org/"
                  title="Vue.js"
                  className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400"
                >
                  Vue.js
                </Link>{' '}
                và{' '}
                <Link
                  href="https://wordpress.org/"
                  title="WordPress"
                  className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400"
                >
                  WordPress
                </Link>
                . Thời gian gần đây mình có tìm hiểu thêm về{' '}
                <Link
                  href="https://nextjs.org/"
                  title="Next.js"
                  className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400"
                >
                  Next.js
                </Link>
                , một Framework được xây dựng trên thư viện{' '}
                <Link
                  href="https://reactjs.org/"
                  title="React.js"
                  className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400"
                >
                  React.js
                </Link>
                . Để xây dựng các dự án phức tạp hơn.
              </p>
            </div>
          </div>
          <div className="vno-col-span-2 md:vno-col-span-1 vno-text-sm vno-leading-6">
            <div className="vno-mx-auto vno-mb-5 vno-max-w-8xl vno-rounded-lg vno-bg-slate-50 last:vno-mb-0 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
              <div className="vno-p-6">
                <Link href="https://tuanducdesign.com/" title="Blog cá nhân">
                  <h5 className="vno-mb-2 vno-text-2xl vno-font-bold vno-tracking-tight vno-text-slate-700 dark:vno-text-slate-300">
                    Blog cá nhân
                  </h5>
                </Link>
                <p className="vno-mb-3 vno-font-normal vno-text-slate-700 dark:vno-text-slate-300">
                  Dự án này mình sử dụng thư viện React.js, Framework Next.js và CSS framework
                  TailwindCSS.
                </p>
                <Link
                  href="https://tuanducdesign.com/"
                  title="Xem thêm dự án Blog cá nhân"
                  className="vno-inline-flex vno-items-center vno-rounded-lg vno-bg-slate-900 vno-px-3 vno-py-2 vno-text-center vno-text-sm vno-font-medium vno-text-white hover:vno-bg-slate-700 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-slate-400 dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                >
                  Xem thêm
                  <svg
                    aria-hidden="true"
                    className="vno-ml-2 -vno-mr-1 vno-h-4 vno-w-4"
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
            <div className="vno-mx-auto vno-mb-5 vno-max-w-8xl vno-rounded-lg vno-bg-slate-50 last:vno-mb-0 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
              <div className="vno-p-6">
                <Link href="https://cv.tuanducdesign.com/" title="Portfolio & Resume">
                  <h5 className="vno-mb-2 vno-text-2xl vno-font-bold vno-tracking-tight vno-text-slate-700 dark:vno-text-slate-300">
                    Portfolio & Resume
                  </h5>
                </Link>
                <p className="vno-mb-3 vno-font-normal vno-text-slate-700 dark:vno-text-slate-300">
                  Dự án này mình sử dụng Vite.js, Framework Vue.js và CSS framework TailwindCSS.
                </p>
                <Link
                  href="https://cv.tuanducdesign.com/"
                  title="Xem thêm dự án Portfolio & Resume"
                  className="vno-inline-flex vno-items-center vno-rounded-lg vno-bg-slate-900 vno-px-3 vno-py-2 vno-text-center vno-text-sm vno-font-medium vno-text-white hover:vno-bg-slate-700 focus:vno-outline-none focus:vno-ring-4 focus:vno-ring-slate-400 dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                >
                  Xem thêm
                  <svg
                    aria-hidden="true"
                    className="vno-ml-2 -vno-mr-1 vno-h-4 vno-w-4"
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
  )
}
