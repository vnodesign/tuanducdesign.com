import Link from '@/components/Link'
import { SiVultr } from 'react-icons/si'
import { HiServer } from 'react-icons/hi'

export default function Provider() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div>
          <h2 className="vno-font-semibold vno-text-pink-500 dark:vno-text-pink-400">
            Nhà cung cấp
          </h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Nhà cung cấp VPS và Hosting
          </p>
          <div>
            <p className="vno-mt-6">
              Hỗ trợ khách hàng tốt khi khách hàng sử dụng các nhà cung cấp hàng đầu thế giới.
            </p>
          </div>
        </div>
        <div>
          <div className="vno-mt-10 vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 sm:vno-gap-4 sm:vno-space-y-0 lg:vno-grid-cols-4 xl:vno-gap-8">
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <Link href="https://vietnix.vn/" title="Vietnix">
                <HiServer className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  Vietnix
                </h3>
              </Link>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <Link href="https://vultr.com/" title="Vultr">
                <SiVultr className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  Vultr
                </h3>
              </Link>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <Link href="https://hostvn.net/" title="HostVN">
                <HiServer className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  HostVN
                </h3>
              </Link>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <Link href="https://inet.vn/" title="INET">
                <HiServer className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  INET
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
