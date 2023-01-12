import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { clientLinks, toolsLinks, providerLinks } from '@/data/footerWidgetLinks'

export default function Footer() {
  return (
    <footer className="vno-bg-gray-100 dark:vno-bg-gray-800 vno-border-t vno-border-gray-200 dark:vno-border-gray-700">
      <div className="vno-mx-auto vno-h-full vno-p-3 lg:vno-px-4 vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 sm:vno-gap-4 sm:vno-space-y-0 lg:vno-grid-cols-6 xl:vno-gap-8 vno-max-w-8xl">
        <div className="vno-col-span-2">
          <Link href="/" className="vno-mb-6 vno-flex vno-self-center vno-text-2xl vno-font-semibold" title="Logo">
            {siteMetadata.title}
          </Link>
          <div className="vno-text-gray-600 dark:vno-text-gray-400">
            Blog này mình sẽ chia sẻ các bài viết và các kiến thức mà mình đã áp dụng khi phát triển VPS và tối ưu Website.
          </div>
        </div>
        <div className="footer-widget">
          <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">Khách hàng</h3>
          <div className="widget-menu">
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
        </div>
        <div className="footer-widget">
          <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">Công cụ VPS</h3>
          <div className="widget-menu">
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
        </div>
        <div className="footer-widget">
          <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">Nhà cung cấp</h3>
          <div className="widget-menu">
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
        </div>
        <div className="footer-widget">
          <h3 className="vno-mb-6 vno-text-sm vno-font-semibold vno-uppercase vno-text-gray-400 dark:vno-text-white">Mạng xã hội</h3>
          <div className="widget-menu">
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
      </div>
      <div className="vno-container vno-mx-auto vno-h-full vno-p-3 lg:vno-px-4 vno-border-t vno-border-gray-200 dark:vno-border-gray-700 vno-max-w-8xl">
        <p className="vno-block vno-text-center vno-font-normal vno-text-gray-600 dark:vno-text-gray-400">
          ©{new Date().getFullYear()} {siteMetadata.title}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
