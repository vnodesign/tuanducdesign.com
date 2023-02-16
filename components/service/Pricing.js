import Link from '@/components/Link'

export default function Pricing() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div>
          <h2 className="vno-font-semibold vno-text-purple-500 dark:vno-text-purple-400">
            Bảng giá
          </h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Dịch vụ VPS và Website
          </p>
          <div>
            <p className="vno-mt-6">
              Tuan Duc Design cung cấp nhiều dịch vụ khác nhau dành cho cá nhân, doanh nghiệp muốn
              xây dựng các sản phẩm của mình trên Internet
            </p>
          </div>
        </div>
        <div>
          <div className="vno-mt-10 lg:vno-mt-12 vno-space-y-8 lg:vno-grid lg:vno-grid-cols-3 sm:vno-gap-6 xl:vno-gap-10 lg:vno-space-y-0">
            {/* Service VPS */}
            <div className="vno-flex vno-flex-col vno-p-6 vno-mx-auto vno-max-w-lg vno-text-center vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10 xl:vno-p-8">
              <h3 className="vno-mb-4 vno-text-2xl vno-font-extrabold vno-text-gray-600 dark:vno-text-slate-300">
                Dịch vụ VPS
              </h3>
              <div className="vno-flex vno-justify-center vno-items-baseline vno-my-8">
                <span className="vno-text-5xl vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
                  450.000 VNĐ
                </span>
              </div>
              <div className="vno-flex vno-flex-1 vno-flex-col">
                <ul role="list" className="vno-mb-8 vno-space-y-4 vno-text-left">
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt chứng chỉ SSL Let’s Encrypt</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dùng LAMP, LEMP hoặc sử dụng Script cài đặt VPS</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Dọn dẹp file rác còn tồn đọng trên Server</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cấu hình tự động dọn dẹp và cập nhật Server</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Đổi cổng IP login Server, IP login SSH</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cấu hình Firewall</span>
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.facebook.com/tuanducdesign"
                className="vno-text-white vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-ring-4 focus:vno-ring-slate-400 vno-font-semibold vno-rounded-lg vno-text-sm vno-px-5 vno-py-2.5 vno-text-center dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                title="Đăng ký"
              >
                Đăng ký
              </Link>
            </div>
            {/* Service Website */}
            <div className="vno-flex vno-flex-col vno-p-6 vno-mx-auto vno-max-w-lg vno-text-center vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10 xl:vno-p-8">
              <h3 className="vno-mb-4 vno-text-2xl vno-font-extrabold vno-text-gray-600 dark:vno-text-slate-300">
                Dịch vụ Website
              </h3>
              <div className="vno-flex vno-justify-center vno-items-baseline vno-my-8">
                <span className="vno-text-5xl vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
                  450.000 VNĐ
                </span>
              </div>
              <div className="vno-flex vno-flex-1 vno-flex-col">
                <ul role="list" className="vno-mb-8 vno-space-y-4 vno-text-left">
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt và cấu hình CloudFlare</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt mã nguồn website (WordPress, Laravel)</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu CSS, tối ưu Javascript và tối ưu ảnh</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu Font (Google Font, FontAwesome)</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Ẩn các thông báo lỗi trên Website</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Chặn hotlink (Không cho người khác copy ảnh)</span>
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.facebook.com/tuanducdesign"
                className="vno-text-white vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-ring-4 focus:vno-ring-slate-400 vno-font-semibold vno-rounded-lg vno-text-sm vno-px-5 vno-py-2.5 vno-text-center dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                title="Đăng ký"
              >
                Đăng ký
              </Link>
            </div>
            {/* Service WordPress */}
            <div className="vno-flex vno-flex-col vno-p-6 vno-mx-auto vno-max-w-lg vno-text-center vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10 xl:vno-p-8">
              <h3 className="vno-mb-4 vno-text-2xl vno-font-extrabold vno-text-gray-600 dark:vno-text-slate-300">
                Dịch vụ WordPress
              </h3>
              <div className="vno-flex vno-justify-center vno-items-baseline vno-my-8">
                <span className="vno-text-5xl vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
                  450.000 VNĐ
                </span>
              </div>
              <div className="vno-flex vno-flex-1 vno-flex-col">
                <ul role="list" className="vno-mb-8 vno-space-y-4 vno-text-left">
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt và cấu hình CloudFlare</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt plugin nén cache và nén định dạng ảnh</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cài đặt CDN tăng tốc CSS, JavaScript và ảnh</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu với PWA</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu CSS, tối ưu JavaScript và tối ưu ảnh</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu giao diện và Font</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tối ưu hóa cơ sở dữ liệu</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Thay đổi prefix trong Database</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Xử lý các vấn đề liên quan đến bảo mật</span>
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.facebook.com/tuanducdesign"
                className="vno-text-white vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-ring-4 focus:vno-ring-slate-400 vno-font-semibold vno-rounded-lg vno-text-sm vno-px-5 vno-py-2.5 vno-text-center dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                title="Đăng ký"
              >
                Đăng ký
              </Link>
            </div>
            {/* Service Manager VPS */}
            <div className="vno-flex vno-flex-col vno-p-6 vno-mx-auto vno-max-w-lg vno-text-center vno-bg-slate-100/50 vno-ring-1 vno-ring-inset vno-ring-slate-400/20 vno-backdrop-blur dark:vno-bg-slate-900/70 dark:vno-ring-white/10 xl:vno-p-8">
              <h3 className="vno-mb-4 vno-text-2xl vno-font-extrabold vno-text-gray-600 dark:vno-text-slate-300">
                Dịch vụ quản lý VPS
              </h3>
              <div className="vno-flex vno-justify-center vno-items-baseline vno-my-8">
                <span className="vno-text-5xl vno-font-extrabold vno-text-sky-500 dark:vno-text-sky-400">
                  200.000 VNĐ
                </span>
              </div>
              <div className="vno-flex vno-flex-1 vno-flex-col">
                <ul role="list" className="vno-mb-8 vno-space-y-4 vno-text-left">
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Theo dõi thông tin hệ thống</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Kiểm tra các lỗ hổng trên VPS</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Kiểm tra các bản cập nhật mới nhất trên VPS</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Kiểm tra và phát hiện xem có ai DDOS VPS không</span>
                  </li>
                  <li className="vno-flex vno-items-center vno-space-x-3">
                    <svg
                      className="vno-flex-shrink-0 vno-w-5 vno-h-5 vno-text-green-500 dark:vno-text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cấu hình tự động hoá các tác vụ trên VPS</span>
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.facebook.com/tuanducdesign"
                className="vno-text-white vno-bg-slate-900 hover:vno-bg-slate-700 focus:vno-ring-4 focus:vno-ring-slate-400 vno-font-semibold vno-rounded-lg vno-text-sm vno-px-5 vno-py-2.5 vno-text-center dark:vno-bg-slate-700 dark:hover:vno-bg-slate-600"
                title="Đăng ký"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
