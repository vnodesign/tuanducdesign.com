import Link from '@/components/Link'
import { SiLinux } from 'react-icons/si'
import Image from '@/components/Image'

export default function Tools() {
  return (
    <>
      <section className="vno-text-center vno-px-8 vno-mb-20 sm:vno-mb-32 md:vno-mb-40">
        <h2 className="vno-text-4xl vno-font-extrabold vno-tracking-tight vno-text-gray-900 dark:vno-text-white sm:vno-text-5xl">
          Công cụ sử dụng trên VPS
        </h2>
        <figure>
          <blockquote>
            <p className="vno-mt-6 vno-max-w-3xl vno-mx-auto vno-text-lg">
              Tuan Duc Design luôn chọn các công cụ mới nhất để giúp khách hàng của mình quản lý VPS
              dễ dàng.
            </p>
          </blockquote>
          <figcaption className="vno-mt-6 vno-flex vno-items-center vno-justify-center vno-space-x-4 vno-text-left">
            <Image
              src="/static/avatar-author.png"
              alt="Tuan Duc Tran"
              width="56"
              height="56"
              className="vno-w-14 vno-h-14 vno-rounded-full vno-object-cover"
              priority
            />
            <div>
              <div className="vno-text-slate-900 vno-font-semibold dark:vno-text-white">
                Tuan Duc Tran
              </div>
              <div className="vno-mt-0.5 vno-text-sm vno-leading-6">
                Admin website Tuan Duc Design
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className="vno-relative vno-max-w-7xl vno-mx-auto vno-px-4 focus:vno-outline-none sm:vno-px-3 md:vno-px-5">
        <div className="vno-grid vno-grid-cols-1 vno-gap-6 lg:vno-gap-8 sm:vno-grid-cols-2 lg:vno-grid-cols-2">
          <ul className="vno-space-y-8">
            <li className="vno-text-sm vno-leading-6">
              <figure className="vno-relative vno-flex vno-flex-col-reverse vno-bg-slate-50 vno-rounded-lg vno-p-6 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
                <blockquote className="vno-mt-6 vno-text-slate-700 dark:vno-text-slate-300">
                  <p>
                    HocVPS là một công cụ giúp tự động hóa quá trình cài đặt tất cả các thành phần
                    cần thiết nhất cho VPS chỉ với một dòng lệnh duy nhất.
                  </p>
                </blockquote>
                <figcaption className="vno-flex vno-items-center vno-space-x-4">
                  <SiLinux className="vno-flex-none vno-w-14 vno-h-14 vno-text-slate-900 dark:vno-text-slate-300" />
                  <div className="vno-flex-auto">
                    <div className="vno-text-base vno-text-slate-900 vno-font-semibold dark:vno-text-slate-300">
                      <Link href="https://hocvps.com/" title="HocVPS Script">
                        <span className="vno-absolute vno-inset-0"></span>HocVPS Script
                      </Link>
                    </div>
                    <div className="vno-mt-0.5">Tương thích với Ubuntu và CentOS</div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="vno-text-sm vno-leading-6">
              <figure className="vno-relative vno-flex vno-flex-col-reverse vno-bg-slate-50 vno-rounded-lg vno-p-6 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
                <blockquote className="vno-mt-6 vno-text-slate-700 dark:vno-text-slate-300">
                  <p>
                    HostVN Script là công cụ quản lý VPS giúp quản trị viên dễ dàng thao tác cài đặt
                    vận hành máy chủ cơ bản và tối ưu bảo mật hơn mà không làm tiêu tốn nhiều tài
                    nguyên của hệ thống.
                  </p>
                </blockquote>
                <figcaption className="vno-flex vno-items-center vno-space-x-4">
                  <SiLinux className="vno-flex-none vno-w-14 vno-h-14 vno-text-slate-900 dark:vno-text-slate-300" />
                  <div className="vno-flex-auto">
                    <div className="vno-text-base vno-text-slate-900 vno-font-semibold dark:vno-text-slate-300">
                      <Link href="https://hostvn.vn/" title="HostVN Script">
                        <span className="vno-absolute vno-inset-0"></span>HostVN Script
                      </Link>
                    </div>
                    <div className="vno-mt-0.5">Tương thích với Ubuntu và CentOS</div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
          <ul className="vno-space-y-8">
            <li className="vno-text-sm vno-leading-6">
              <figure className="vno-relative vno-flex vno-flex-col-reverse vno-bg-slate-50 vno-rounded-lg vno-p-6 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
                <blockquote className="vno-mt-6 vno-text-slate-700 dark:vno-text-slate-300">
                  <p>
                    WPTangToc OLS là một trình quản lý thao tác thông qua Script trên VPS và máy chủ
                    riêng. Thay vì bạn phải tự xây dựng máy chủ hoặc phải sử dụng các Control Panel
                    cồng kềnh và tốn nhiều tài nguyên máy chủ thì nay bạn có thể sử dụng WPTangToc
                    OLS với yêu cầu hệ thống thấp hơn.
                  </p>
                </blockquote>
                <figcaption className="vno-flex vno-items-center vno-space-x-4">
                  <SiLinux className="vno-flex-none vno-w-14 vno-h-14 vno-text-slate-900 dark:vno-text-slate-300" />
                  <div className="vno-flex-auto">
                    <div className="vno-text-base vno-text-slate-900 vno-font-semibold dark:vno-text-slate-300">
                      <Link href="https://wptangtoc.com/wptangtoc-ols" title="WPTangToc OLS">
                        <span className="vno-absolute vno-inset-0"></span>WPTangToc OLS
                      </Link>
                    </div>
                    <div className="vno-mt-0.5">Yêu cầu hệ điều hành CentOS 7</div>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="vno-text-sm vno-leading-6">
              <figure className="vno-relative vno-flex vno-flex-col-reverse vno-bg-slate-50 vno-rounded-lg vno-p-6 dark:vno-bg-slate-800 dark:vno-highlight-white/5">
                <blockquote className="vno-mt-6 vno-text-slate-700 dark:vno-text-slate-300">
                  <p>
                    AAPanel là một control panel miễn phí khá tốt, nó có thể quản lý server thông
                    qua giao diện (GUI) đơn giản và chỉ với thao tác đơn giản thì đã có thể cài đặt
                    được một web server chạy mô hình LNMP/LAMP.
                  </p>
                </blockquote>
                <figcaption className="vno-flex vno-items-center vno-space-x-4">
                  <SiLinux className="vno-flex-none vno-w-14 vno-h-14 vno-text-slate-900 dark:vno-text-slate-300" />
                  <div className="vno-flex-auto">
                    <div className="vno-text-base vno-text-slate-900 vno-font-semibold dark:vno-text-slate-300">
                      <Link href="https://www.aapanel.com/" title="AAPanel Script">
                        <span className="vno-absolute vno-inset-0"></span>AAPanel Script
                      </Link>
                    </div>
                    <div className="vno-mt-0.5">
                      Tương thích với Ubuntu, Deeppin, Debian và CentOS
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
