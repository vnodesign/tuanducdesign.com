import { Disclosure } from '@headlessui/react'

const faq = [
  {
    title: 'Mình nên sử dụng VPS CentOS, Ubuntu hay Win Server?',
    description:
      'Để sử dụng tốt các dịch vụ mà mình cung cấp. Bạn nên sử dụng VPS chạy hệ điều hành CentOS. Trong trường hợp bạn chạy Web ASP.NET, bạn hãy sử dụng VPS Win Server.',
  },
  {
    title: 'Mình nên sử dụng máy chủ Apache, Nginx hay máy chủ LiteSpeed?',
    description:
      'Để sử dụng tốt các dịch vụ mà mình cung cấp, mình khuyên bạn nên sử dụng máy chủ Nginx hoặc máy chủ LiteSpeed, để đáp ứng mọi nhu cầu, Với máy chủ Apache nó tiêu tốn nhiều tài nguyên hơn, Nên mình sẽ không hỗ trợ bạn tối ưu trên máy chủ này nhé.',
  },
  {
    title: 'Cấu hình hệ thống trên Server bao nhiêu là đủ với website của mình?',
    description:
      'Tùy nhu cầu sử dụng của bạn! Thông thường đối với một website tin tức nhiều ảnh như mã nguồn WordPress, Thì CPU thường là 2 CPU, Ram là 4GB RAM và phân vùng hệ thống là 250GB SSD.',
  },
  {
    title: 'Mình có phải mất thêm tiền để duy trì dịch vụ của bạn?',
    description:
      'Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí, để duy trì các dịch vụ mà bạn đã mua của mình nữa.',
  },
]

export default function Faq() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8">
        <div>
          <h2 className="vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">FAQ</h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Câu hỏi thường gặp
          </p>
          <div>
            <p className="vno-mt-6">
              Tìm kiếm câu hỏi thường gặp của bạn, khi sử dụng các dịch vụ tại Tuan Duc Design.
            </p>
          </div>
        </div>
        <div>
          <div className="vno-mt-10 vno-mx-auto">
            <div className="vno-shadow vno-divide-y vno-divide-gray-200 dark:vno-divide-gray-700 vno-border-gray-200 dark:vno-border-gray-700">
              {faq.map((faq) => (
                <FaqItem key={faq.title} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem(props) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`vno-flex vno-w-full vno-items-center vno-justify-between vno-px-5 vno-py-5 vno-text-left vno-font-medium vno-bg-slate-50 dark:vno-bg-gray-800 vno-text-gray-900 dark:vno-text-slate-300 vno-transition ${
                open && 'vno-text-sky-500 dark:vno-text-sky-400'
              }`}
            >
              {props.title}
              <svg
                fill="currentColor"
                className={`vno-h-6 vno-w-6 vno-shrink-0 ${
                  open && 'vno-rotate-90 vno-transform vno-transition-transform vno-duration-500'
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="vno-bg-slate-50 dark:vno-bg-gray-800 vno-text-gray-900 dark:vno-text-slate-300 vno-p-5">
              {props.description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
