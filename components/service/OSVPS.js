import { SiUbuntu, SiCentos, SiDebian } from 'react-icons/si'

export default function OSVPS() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div>
          <h2 className="vno-font-semibold vno-text-purple-500 dark:vno-text-purple-400">
            Hệ điều hành
          </h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Hệ điều hành sử dụng trên VPS
          </p>
          <div>
            <p className="vno-mt-6">
              Tuan Duc Design luôn chọn hệ điều hành CentOS hoặc Ubuntu để hỗ trợ khách hàng dễ dàng
              khi sử dụng dịch vụ của mình.
            </p>
          </div>
        </div>
        <div>
          <div className="vno-mt-10 vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 sm:vno-gap-4 sm:vno-space-y-0 lg:vno-grid-cols-4 xl:vno-gap-8">
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <SiUbuntu className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  Ubuntu
                </h3>
              </div>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <SiCentos className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  CentOS 7
                </h3>
              </div>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <SiCentos className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  CentOS 8
                </h3>
              </div>
            </div>
            <div className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <SiDebian className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-600 dark:vno-text-slate-300" />
                <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-600 dark:vno-text-slate-300">
                  Debian
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
