import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  clientLinks,
  toolsLinks,
  providerLinks,
  customLinks,
  productionLinks,
  otherLinks,
} from '@/data/footerWidgetLinks'

export default function Footer() {
  return (
    <footer className="vno-justify-self-end vno-border-t vno-border-t-slate-200 dark:vno-border-t-slate-700">
      <div className="vno-mx-auto vno-max-w-8xl vno-p-4 vno-py-6 md:vno-p-8 lg:vno-p-10">
        <div className="vno-grid vno-grid-cols-2 vno-gap-8 md:vno-grid-cols-3 lg:vno-grid-cols-6">
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Khách hàng
            </h2>
            <ul>
              {clientLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Công cụ VPS
            </h2>
            <ul>
              {toolsLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Nhà cung cấp
            </h2>
            <ul>
              {providerLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Liên kết
            </h2>
            <ul>
              {customLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Sản phẩm
            </h2>
            <ul>
              {productionLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="vno-mb-6 vno-font-semibold vno-text-gray-900 dark:vno-text-slate-100">
              Các trang web
            </h2>
            <ul>
              {otherLinks.map((item) => (
                <li key={item.href} className="vno-mb-4">
                  <Link
                    href={item.href}
                    className="hover:vno-text-slate-900 dark:hover:vno-text-slate-300"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="vno-my-6 vno-border-slate-200 sm:mx-auto dark:vno-border-slate-700 lg:vno-my-8" />
        <div className="sm:vno-flex sm:vno-items-center sm:vno-justify-between">
          <span className="vno-text-sm vno-text-gray-500 sm:vno-text-center dark:vno-text-gray-400">
            © 2021-{new Date().getFullYear()} {siteMetadata.title}. All Rights Reserved.
          </span>
          <div className="vno-flex vno-mt-4 vno-space-x-6 sm:vno-justify-center sm:vno-mt-0">
            <Link
              href={siteMetadata.facebook}
              className="vno-text-gray-500 hover:vno-text-gray-900 dark:hover:vno-text-white"
              title="Facebook"
            >
              <FaFacebook className="vno-w-5 vno-h-5" />
            </Link>
            <Link
              href={siteMetadata.twitter}
              className="vno-text-gray-500 hover:vno-text-gray-900 dark:hover:vno-text-white"
              title="Twitter"
            >
              <FaTwitter className="vno-w-5 vno-h-5" />
            </Link>
            <Link
              href={siteMetadata.github}
              className="vno-text-gray-500 hover:vno-text-gray-900 dark:hover:vno-text-white"
              title="Github"
            >
              <FaGithub className="vno-w-5 vno-h-5" />
            </Link>
            <Link
              href={siteMetadata.linkedin}
              className="vno-text-gray-500 hover:vno-text-gray-900 dark:hover:vno-text-white"
              title="Linkedin"
            >
              <FaLinkedin className="vno-w-5 vno-h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
