const faq = [
  {
    title: 'Dịch vụ',
    item: [
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
    ],
  },
  {
    title: 'Thanh toán',
    item: [
      {
        title: 'Mình có phải mất thêm tiền để duy trì dịch vụ của bạn không?',
        description:
          'Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí, để duy trì các dịch vụ mà bạn đã mua của mình nữa.',
      },
      {
        title: 'Nếu mình không hài lòng về dịch vụ, thì mình có được hoàn tiền không?',
        description:
          'Nếu bạn không cảm thấy hài lòng về dịch vụ của mình, thì mình sẽ hoàn trả đúng với số tiền mà bạn đã đăng ký dịch vụ.',
      },
    ],
  },
  {
    title: 'Quà tặng',
    item: [
      {
        title: 'Mình sẽ được tặng những phần quà nào sau khi đăng ký dịch vụ VPS, Hosting?',
        description:
          'Bạn sẽ được tặng miễn phí các Plugin và theme bản quyền của WordPress trị giá lên đến 800$/Năm tại Vietnix sau khi đăng ký dịch vụ VPS và Hosting.',
      },
    ],
  },
]

export default function Faq() {
  return (
    <section className="vno-relative">
      <div className="vno-max-w-7xl vno-pt-10 vno-mx-auto vno-px-4 sm:vno-px-6 md:vno-px-8 vno-grid vno-grid-cols-1 vno-gap-y-10 xl:vno-grid-cols-12">
        <div className="lg:vno-col-span-4">
          <h2 className="vno-font-semibold vno-text-blue-500">FAQ</h2>
          <p className="vno-mt-4 vno-text-3xl sm:vno-text-4xl vno-text-slate-900 vno-font-extrabold vno-tracking-tight dark:vno-text-slate-50">
            Câu hỏi thường gặp
          </p>
          <div>
            <p className="vno-mt-6">
              Tìm kiếm câu hỏi thường gặp của bạn, khi sử dụng các dịch vụ tại Tuan Duc Design.
            </p>
          </div>
        </div>
        <div className="-vno-mb-4 vno-space-y-12 lg:vno-col-span-8 xl:vno-col-span-7 xl:vno-col-start-6">
          {faq.map((faq) => (
            <FaqItem key={faq.title} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem(props) {
  return (
    <section>
      <h3 className="vno-text-sm vno-font-semibold vno-leading-7 vno-text-sky-500 dark:vno-text-sky-400">
        {props.title}
      </h3>
      {props.item.map((item) => (
        <div
          className="vno-mt-2 vno-divide-y vno-divide-gray-200 dark:vno-divide-gray-700 vno-border-gray-200 dark:vno-border-gray-700"
          key={item.title}
        >
          <details className="vno-group vno-py-4 marker:vno-content-['']">
            <summary className="vno-flex vno-w-full vno-cursor-pointer vno-select-none vno-justify-between vno-text-left vno-text-base vno-font-semibold vno-text-gray-900 dark:vno-text-slate-300 group-open:vno-text-sky-500 dark:group-open:vno-text-sky-400 [&::-webkit-details-marker]:vno-hidden">
              {item.title}{' '}
              <svg
                className="vno-mt-0.5 vno-ml-4 vno-h-6 vno-w-6 vno-flex-none vno-stroke-slate-900 dark:vno-stroke-slate-300 group-open:vno-stroke-sky-500 dark:group-open:vno-text-sky-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 12H6" />
                <path className="group-open:vno-hidden" d="M12 6v12" />
              </svg>
            </summary>
            <div className="vno-py-6">{item.description}</div>
          </details>
        </div>
      ))}
    </section>
  )
}
