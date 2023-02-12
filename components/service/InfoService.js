import { HiServer } from 'react-icons/hi'
import { SiPagespeedinsights, SiNginx } from 'react-icons/si'

export default function InfoService() {
  return (
    <section className="vno-mt-20 vno-px-8 sm:vno-mt-32 md:vno-mt-40 sm:vno-text-lg">
      <div className="vno-mx-auto vno-max-w-7xl vno-px-4 md:vno-px-5">
        <div className="vno-grid vno-grid-cols-1 vno-gap-x-6 lg:vno-grid-cols-2">
          <div>
            <h2 className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">Dịch vụ</h2>
            <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
              Dịch vụ nổi bật tại Tuan Duc Design.
            </p>
            <div>
              <p className="vno-mt-6">
                Mình biết có những dịch vụ{' '}
                <span className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
                  VPS
                </span>{' '}
                và{' '}
                <span className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
                  Website
                </span>{' '}
                ngoài kia đã khá tốt rồi, nhưng mình vẫn muốn giới thiệu thêm với bạn về các dịch vụ
                nổi bật của mình, để bạn tham khảo và lựa chọn.
              </p>
              <p className="vno-mt-6">
                Mình đã có hai bài viết hướng dẫn chi tiết về{' '}
                <span className="vno-font-semibold vno-text-pink-500 dark:vno-text-pink-400">
                  cách cài đặt Module PageSpeed lên máy chủ Nginx và máy chủ OpenLiteSpeed
                </span>
                , bạn có thể tham khảo để biết cách cấu hình về sau nhé.
              </p>
            </div>
          </div>
          <div className="vno-mt-10 vno-grid vno-grid-cols-1 vno-gap-12 md:vno-grid-cols-2 md:vno-gap-10">
            <div>
              <div className="vno-flex vno-flex-col">
                <div className="dark:vno-highlight-white/5 vno-relative vno-mb-10 last:vno-mb-0 vno-rounded-lg vno-bg-slate-50 vno-p-6 vno-leading-6 dark:vno-bg-slate-800">
                  <div className="vno-flex vno-h-14 vno-w-14 vno-items-center vno-justify-center vno-rounded-full vno-bg-sky-500 dark:vno-bg-sky-400">
                    <SiPagespeedinsights className="vno-text-white" />
                  </div>
                  <div className="vno-mt-3 vno-text-lg vno-font-semibold vno-text-slate-900 dark:vno-text-slate-300">
                    Cài đặt Module PageSpeed
                  </div>
                  <p className="vno-mt-3 vno-text-base vno-text-slate-700 dark:vno-text-slate-300">
                    Module PageSpeed là tập hợp một số các modules dành cho NGINX và Apache, hỗ trợ
                    cho việc tối ưu mã html trên trình duyệt và đo được performance của website.
                  </p>
                </div>
                <div className="dark:vno-highlight-white/5 vno-relative vno-mb-10 last:vno-mb-0 vno-rounded-lg vno-bg-slate-50 vno-p-6 vno-leading-6 dark:vno-bg-slate-800">
                  <div className="vno-flex vno-h-14 vno-w-14 vno-items-center vno-justify-center vno-rounded-full vno-bg-cyan-500 dark:vno-bg-cyan-400">
                    <HiServer className="vno-text-white" />
                  </div>
                  <div className="vno-mt-3 vno-text-lg vno-font-semibold vno-text-slate-900 dark:vno-text-slate-300">
                    Cài đặt Memcached
                  </div>
                  <p className="vno-mt-3 vno-text-base vno-text-slate-700 dark:vno-text-slate-300">
                    Memcached chính là một hệ thống phân phối cũng như là lưu giữ toàn bộ phần bộ
                    nhớ sửa thông tin dữ liệu trên hệ thống RAM.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="vno-flex vno-flex-col">
                <div className="dark:vno-highlight-white/5 vno-relative vno-mb-10 last:vno-mb-0 vno-rounded-lg vno-bg-slate-50 vno-p-6 vno-leading-6 dark:vno-bg-slate-800">
                  <div className="vno-flex vno-h-14 vno-w-14 vno-items-center vno-justify-center vno-rounded-full vno-bg-pink-500 dark:vno-bg-pink-400">
                    <HiServer className="vno-text-white" />
                  </div>
                  <div className="vno-mt-3 vno-text-lg vno-font-semibold vno-text-slate-900 dark:vno-text-slate-300">
                    Cài đặt Redis
                  </div>
                  <p className="vno-mt-3 vno-text-base vno-text-slate-700 dark:vno-text-slate-300">
                    Redis (Remote Dictionary Server) là một kho lưu trữ dữ liệu key-value mã nguồn
                    mở với tốc độ cao. Redis được sử dụng để lưu trữ dữ liệu có cấu trúc, có thể
                    được sử dụng như một database, bộ nhớ cache hay một message broker.
                  </p>
                </div>
                <div className="dark:vno-highlight-white/5 vno-relative vno-mb-10 last:vno-mb-0 vno-rounded-lg vno-bg-slate-50 vno-p-6 vno-leading-6 dark:vno-bg-slate-800">
                  <div className="vno-flex vno-h-14 vno-w-14 vno-items-center vno-justify-center vno-rounded-full vno-bg-emerald-500 dark:vno-bg-emerald-400">
                    <SiNginx className="vno-text-white" />
                  </div>
                  <div className="vno-mt-3 vno-text-lg vno-font-semibold vno-text-slate-900 dark:vno-text-slate-300">
                    Cài đặt Nginx Amplify
                  </div>
                  <p className="vno-mt-3 vno-text-base vno-text-slate-700 dark:vno-text-slate-300">
                    Nginx Amplify là công cụ tuyệt vời giúp giám sát tình trạng Nginx và Server theo
                    thời gian thực, qua đó giúp phân tích và tối ưu các ứng dụng hoạt động dựa trên
                    Nginx.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
