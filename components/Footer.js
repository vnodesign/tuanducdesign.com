import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import gtagTrack from '@/lib/utils/gtag'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  clientLinks,
  toolsLinks,
  providerLinks,
  customLinks,
  productionLinks,
} from '@/data/footerWidgetLinks'

export default function Footer() {
  return (
    <footer className="vno-justify-self-end vno-border-t vno-border-t-slate-200 dark:vno-border-t-slate-700">
      <div className="vno-mx-auto vno-max-w-8xl vno-p-4 vno-py-6 md:vno-p-8 lg:vno-p-10">
        <div className="vno-grid vno-grid-cols-2 vno-gap-8 md:vno-grid-cols-3 lg:vno-grid-cols-5">
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
        </div>
        <hr className="vno-my-6 vno-border-slate-200 sm:mx-auto dark:vno-border-slate-700 lg:vno-my-8" />
        <div className="vno-text-center">
          <Link
            href="/"
            className="vno-flex vno-justify-center vno-items-center vno-mb-5 vno-text-2xl vno-font-semibold vno-text-gray-900 dark:vno-text-white"
            title={siteMetadata.title}
            onClick={() => gtagTrack('FooterLogoLink', '/')}
          >
            <Image
              src={siteMetadata.siteLogo}
              className="vno-mr-2 vno-h-8"
              width="32"
              height="32"
              sizes="(max-width 32px) 80vw, 50vw"
              alt={siteMetadata.title}
            />
            {siteMetadata.title}
          </Link>
          <span className="vno-block vno-text-sm vno-text-center vno-text-gray-500">
            © 2021-{new Date().getFullYear()} {siteMetadata.title}. All Rights Reserved.
          </span>
          <ul className="vno-flex vno-justify-center vno-mt-5 vno-space-x-5 vno-text-slate-400 dark:vno-text-slate-500">
            <li>
              <Link
                href={siteMetadata.facebook}
                className="hover:vno-text-slate-500 dark:hover:vno-text-slate-400"
                title="Facebook"
              >
                <FaFacebook className="vno-w-5 vno-h-5" />
              </Link>
            </li>
            <li>
              <Link
                href={siteMetadata.twitter}
                className="hover:vno-text-slate-500 dark:hover:vno-text-slate-400"
                title="Twitter"
              >
                <FaTwitter className="vno-w-5 vno-h-5" />
              </Link>
            </li>
            <li>
              <Link
                href={siteMetadata.github}
                className="hover:vno-text-slate-500 dark:hover:vno-text-slate-400"
                title="Github"
              >
                <FaGithub className="vno-w-5 vno-h-5" />
              </Link>
            </li>
            <li>
              <Link
                href={siteMetadata.linkedin}
                className="hover:vno-text-slate-500 dark:hover:vno-text-slate-400"
                title="Linkedin"
              >
                <FaLinkedin className="vno-w-5 vno-h-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
