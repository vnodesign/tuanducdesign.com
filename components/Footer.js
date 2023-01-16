import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import { clientLinks, toolsLinks, providerLinks } from '@/data/footerWidgetLinks'

export default function Footer() {
  return (
    <footer className="vno-justify-self-end vno-pt-16 vno-pb-8 lg:vno-pt-24 lg:vno-pb-10 vno-border-t vno-border-t-slate-200 dark:vno-border-t-slate-700">
      <div className="vno-mx-auto vno-p-3 lg:vno-px-4">
        <div className="vno-grid lg:vno-grid-cols-6 vno-gap-12 lg:vno-gap-24 vno-max-w-8xl">
          <div className="vno-col-span-2">
            <Link href="/" className="vno-flex vno-mb-6" title={`${siteMetadata.title} Logo`}>
              <Image
                src={siteMetadata.siteLogo}
                width="32"
                height="32"
                alt={`${siteMetadata.title} Logo`}
              />
              <span className="vno-self-center vno-ml-3 vno-text-2xl vno-font-semibold vno-text-gray-900 dark:vno-text-white">
                {siteMetadata.title}
              </span>
            </Link>
            <div className="vno-text-gray-600 dark:vno-text-gray-400">
              Blog này mình sẽ chia sẻ các bài viết và các kiến thức mà mình đã áp dụng khi phát
              triển VPS và tối ưu Website.
            </div>
          </div>
          <div>
            <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">
              Khách hàng
            </h3>
            <ul>
              {clientLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">
              Công cụ VPS
            </h3>
            <ul>
              {toolsLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">
              Nhà cung cấp
            </h3>
            <ul>
              {providerLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">
              Mạng xã hội
            </h3>
            <ul>
              <li className="vno-mb-4">
                <Link
                  href={siteMetadata.facebook}
                  className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                  title="Facebook"
                >
                  Facebook
                </Link>
              </li>
              <li className="vno-mb-4">
                <Link
                  href={siteMetadata.github}
                  className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                  title="Github"
                >
                  Github
                </Link>
              </li>
              <li className="vno-mb-4">
                <Link
                  href={siteMetadata.twitter}
                  className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                  title="Twitter"
                >
                  Twitter
                </Link>
              </li>
              <li className="vno-mb-4">
                <Link
                  href={siteMetadata.linkedin}
                  className="vno-font-normal vno-text-gray-600 dark:vno-text-gray-400 hover:vno-text-gray-400 dark:hover:vno-text-white"
                  title="Linkedin"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="vno-my-8 vno-border-slate-200 dark:vno-border-slate-700 lg:vno-my-12" />
        <span className="vno-block vno-font-normal vno-text-center vno-text-gray-600 dark:vno-text-gray-400">
          © 2022-{new Date().getFullYear()} {siteMetadata.title} All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
