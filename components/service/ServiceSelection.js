import { HiSupport, HiGift, HiCreditCard } from 'react-icons/hi'
import { FaMoneyBill } from 'react-icons/fa'

export default function ServiceSelection() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div>
          <h2 className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
            Lý do lựa chọn
          </h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Dịch vụ của Tuan Duc Design có gì tốt?
          </p>
          <div>
            <p className="vno-mt-6">
              Trong dịch vụ{' '}
              <span className="vno-font-semibold vno-text-purple-500 dark:vno-text-purple-400">
                VPS
              </span>{' '}
              và{' '}
              <span className="vno-font-semibold vno-text-orange-500 dark:vno-text-orange-400">
                Website
              </span>{' '}
              này, mình sẽ hỗ trợ bạn một cách nhanh nhất, có{' '}
              <span className="vno-font-semibold vno-text-pink-500 dark:vno-text-pink-400">
                nhiều phần quà hấp dẫn
              </span>{' '}
              sau khi bạn đăng ký dịch vụ{' '}
              <span className="vno-font-semibold vno-text-purple-500 dark:vno-text-purple-400">
                VPS
              </span>{' '}
              và{' '}
              <span className="vno-font-semibold vno-text-orange-500 dark:vno-text-orange-400">
                Website
              </span>
              , và còn rất nhiều phần quà khác!
            </p>
          </div>
        </div>
        <div>
          <div className="vno-mt-10 vno-space-y-10 md:vno-grid md:vno-grid-cols-2 md:vno-gap-x-8 md:vno-gap-y-10 md:vno-space-y-0 md:vno-mt-12">
            <div className="vno-relative vno-p-3 vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                  <HiSupport className="vno-w-6 vno-h-6 vno-text-white" />
                </div>
                <p className="vno-ml-16 vno-font-bold vno-text-gray-600 dark:vno-text-slate-300">
                  Hỗ trợ nhanh chóng
                </p>
              </div>
              <div className="vno-mt-2 vno-ml-16 vno-text-sm sm:vno-text-base">
                Mình hoạt động 24/24 để hỗ trợ bạn các vấn đề, liên quan đến phát triển VPS và tối
                ưu Website.
              </div>
            </div>
            <div className="vno-relative vno-p-3 vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                  <HiCreditCard className="vno-w-6 vno-h-6 vno-text-white" />
                </div>
                <p className="vno-ml-16 vno-font-bold vno-text-gray-600 dark:vno-text-slate-300">
                  Dịch vụ thanh toán một lần
                </p>
              </div>
              <div className="vno-mt-2 vno-ml-16 vno-text-sm sm:vno-text-base">
                Sau khi đăng ký các dịch vụ của mình xong, bạn không phải bỏ ra một khoản phí nào để
                duy trì nữa.
              </div>
            </div>
            <div className="vno-relative vno-p-3 vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                  <FaMoneyBill className="vno-w-6 vno-h-6 vno-text-white" />
                </div>
                <p className="vno-ml-16 vno-font-bold vno-text-gray-600 dark:vno-text-slate-300">
                  Hoàn tiền khi bạn không hài lòng về dịch vụ
                </p>
              </div>
              <div className="vno-mt-2 vno-ml-16 vno-text-sm sm:vno-text-base">
                Nếu như trong quá trình bạn sử dụng các dịch vụ của mình. Nếu bạn không cảm thấy hài
                lòng, mình sẽ hoàn trả đúng với số tiền mà bạn đã đăng ký dịch vụ.
              </div>
            </div>
            <div className="vno-relative vno-p-3 vno-rounded-lg vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10">
              <div>
                <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                  <HiGift className="vno-w-6 vno-h-6 vno-text-white" />
                </div>
                <p className="vno-ml-16 vno-font-bold vno-text-gray-600 dark:vno-text-slate-300">
                  Nhiều phần quà hấp dẫn dành cho bạn
                </p>
              </div>
              <div className="vno-mt-2 vno-ml-16 vno-text-sm sm:vno-text-base">
                Sau khi bạn sử dụng các dịch vụ của mình, thì mình có nhiều phần quà hấp dẫn dành
                tặng cho bạn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
