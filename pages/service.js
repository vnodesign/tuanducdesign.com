import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

// const featured = [
//   {
//     title: 'Cài đặt Module PageSpeed của Google',
//     description:
//       'Hàng triệu website đang sử dụng Module PageSpeed của Google trên máy chủ của họ. Không chỉ hỗ trợ tối ưu website trên VPS nó còn giúp bạn defer và async các scripts nguồn ngoài, Chuyển các thẻ script trên head xuống footer để website tải nhanh hơn, async Google Analytics, lazyload ảnh, rút gọn lại head và nhiều tính năng khác.',
//     icon: SiPagespeedinsights,
//   },
//   {
//     title: 'Cài đặt Memcached',
//     description:
//       'Memcached là một hệ thống cache hoạt động bằng cách lưu tạm thông tin những dữ liệu bạn hay sử dụng vào bộ nhớ RAM. Do tốc độ đọc ghi của bộ nhớ bao giờ cũng cao hơn so với lưu trữ file nên việc sử dụng memcached giúp cho hệ thống của bạn tăng tốc lên một cách đáng kể.',
//     icon: HiServer,
//   },
//   {
//     title: 'Cài đặt Redis',
//     description:
//       'Redis là hệ thống caching lưu trữ dữ liệu trong RAM tương tự như Memcached. Không chỉ hỗ trợ cache dạng keys/values tốt như Memcached mà Redis còn hỗ trợ nhiều cấu trúc dữ liệu khác như hash, list, set, sorted set, string.',
//     icon: HiServer,
//   },
//   {
//     title: 'Cài đặt Nginx Amplify',
//     description:
//       'Công cụ hoạt động trên nền tảng điện toán đám mây, được cài đặt thông qua một module của Nginx kết nối với API cung cấp miễn phí bởi Nginx.com, giúp bạn dễ dàng theo dõi hoạt động của hệ thống cũng như chủ động xác định các vấn đề.',
//     icon: SiNginx,
//   },
// ]

// const tools = [
//   {
//     title: 'HocVPS Script',
//     href: 'https://hocvps.com/',
//     icon: SiLinux,
//   },
//   {
//     title: 'HostVN Script',
//     href: 'https://hostvn.vn/',
//     icon: SiLinux,
//   },
//   {
//     title: 'AAPanel Script',
//     href: 'https://www.aapanel.com/',
//     icon: SiLinux,
//   },
//   {
//     title: 'LarVPS Script',
//     href: 'https://larvps.com/',
//     icon: SiLinux,
//   },
// ]

// const service = [
//   {
//     title: 'Hỗ trợ nhanh chóng',
//     description:
//       'Mình hoạt động 24/24 để hỗ trợ bạn các vấn đề, liên quan đến phát triển VPS và tối ưu Website.',
//     icon: HiSupport,
//   },
//   {
//     title: 'Dịch vụ thanh toán một lần',
//     description:
//       'Sau khi đăng ký các dịch vụ của mình xong, bạn không phải bỏ ra một khoản phí nào để duy trì nữa.',
//     icon: HiCreditCard,
//   },
//   {
//     title: 'Hoàn tiền khi bạn không hài lòng về dịch vụ',
//     description:
//       'Nếu như trong quá trình bạn sử dụng các dịch vụ của mình. Nếu bạn không cảm thấy hài lòng, mình sẽ hoàn trả đúng với số tiền mà bạn đã đăng ký dịch vụ.',
//     icon: FaMoneyBill,
//   },
//   {
//     title: 'Nhiều phần quà hấp dẫn dành cho bạn',
//     description:
//       'Sau khi bạn sử dụng các dịch vụ của mình, thì mình có nhiều phần quà hấp dẫn dành tặng cho bạn.',
//     icon: HiGift,
//   },
// ]

// const osVPS = [
//   {
//     title: 'Ubuntu',
//     description:
//       'Ubuntu là một hệ điều hành trên máy tính, và nó được phát triển dựa trên Linux/Debian GNU. Lần đầu được giới thiệu vào năm 2004.',
//     icon: SiUbuntu,
//   },
//   {
//     title: 'CentOS 7',
//     description: 'CentOS 7 được phát hành vào tháng 5 năm 2004.',
//     icon: SiCentos,
//   },
//   {
//     title: 'CentOS 8',
//     description: 'CentOS 8 được phát hành vào ngày 24 tháng 9 năm 2019.',
//     icon: SiCentos,
//   },
//   {
//     title: 'Debian',
//     description:
//       'Debian là một trong những hệ điều hành dựa trên Linux lâu đời nhất hiện nay được phát hành lần đầu tiên vào năm 1993.',
//     icon: SiDebian,
//   },
// ]

// const sourceCode = [
//   {
//     title: 'WordPress',
//     description:
//       'WordPress là mã nguồn mở giúp bạn tạo website, blog hay ứng dụng dễ dàng và đẹp mắt.',
//     icon: SiWordpress,
//   },
//   {
//     title: 'Joomla',
//     description:
//       'Joomla! là một hệ thống quản lý nội dung (CMS) cho phép bạn xây dựng trang web và ứng dụng trực tuyến mạnh mẽ.',
//     icon: SiJoomla,
//   },
//   {
//     title: 'Drupal',
//     description:
//       'Drupal là một khung sườn phát triển phần mềm hướng mô-đun, một hệ quản trị nội dung miễn phí và mã nguồn mở.',
//     icon: SiDrupal,
//   },
//   {
//     title: 'Xenforo',
//     description:
//       'Xenforo là mã nguồn mở được xây dựng bởi các lập trình viên tách ra từ nhóm vBullentin (vBB).',
//     icon: HiCode,
//   },
//   {
//     title: 'Laravel',
//     description:
//       'Laravel là một trong những PHP Framework phổ biến nhất trên thế giới được sử dụng để xây dựng ứng dụng web từ các dự án nhỏ đến lớn.',
//     icon: SiLaravel,
//   },
//   {
//     title: 'Codeigniter',
//     description:
//       'Codeigniter là 1 framework viết bằng ngôn ngữ lập trình PHP dựa trên mô hình MVC.',
//     icon: SiCodeigniter,
//   },
// ]

// const provider = [
//   {
//     title: 'Vietnix',
//     href: 'https://vietnix.vn/',
//     icon: HiServer,
//   },
//   {
//     title: 'Vultr',
//     href: 'https://vultr.com/',
//     icon: SiVultr,
//   },
//   {
//     title: 'HostVN',
//     href: 'https://hostvn.net/',
//     icon: HiServer,
//   },
//   {
//     title: 'INET',
//     href: 'https://inet.vn/',
//     icon: HiServer,
//   },
// ]

// const faq = [
//   {
//     title: 'Mình nên sử dụng VPS CentOS, Ubuntu hay Win Server?',
//     description:
//       'Để sử dụng tốt các dịch vụ mà mình cung cấp. Bạn nên sử dụng VPS chạy hệ điều hành CentOS. Trong trường hợp bạn chạy Web ASP.NET, bạn hãy sử dụng VPS Win Server.',
//   },
//   {
//     title: 'Mình nên sử dụng máy chủ Apache, Nginx hay máy chủ LiteSpeed?',
//     description:
//       'Để sử dụng tốt các dịch vụ mà mình cung cấp, mình khuyên bạn nên sử dụng máy chủ Nginx hoặc máy chủ LiteSpeed, để đáp ứng mọi nhu cầu, Với máy chủ Apache nó tiêu tốn nhiều tài nguyên hơn, Nên mình sẽ không hỗ trợ bạn tối ưu trên máy chủ này nhé.',
//   },
//   {
//     title: 'Cấu hình hệ thống trên Server bao nhiêu là đủ với website của mình?',
//     description:
//       'Tùy nhu cầu sử dụng của bạn! Thông thường đối với một website tin tức nhiều ảnh như mã nguồn WordPress, Thì CPU thường là 2 CPU, Ram là 4GB RAM và phân vùng hệ thống là 250GB SSD.',
//   },
//   {
//     title: 'Mình có phải mất thêm tiền để duy trì dịch vụ của bạn?',
//     description:
//       'Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí, để duy trì các dịch vụ mà bạn đã mua của mình nữa.',
//   },
// ]

export default function Service() {
  return (
    <>
      <PageSEO title="Under Maintenance" description={siteMetadata.description} breadcrumb={true} />
      <section>
        <div className="vno-mx-auto vno-max-w-screen-md vno-py-8 vno-px-4 vno-text-center lg:vno-py-16 lg:vno-px-12">
          <svg
            className="vno-mx-auto vno-mb-4 vno-h-10 vno-w-10 vno-text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
            />
          </svg>
          <h1 className="vno-mb-4 vno-text-4xl vno-font-bold vno-leading-none vno-tracking-tight vno-text-gray-900 dark:vno-text-white md:vno-text-5xl lg:vno-mb-6 xl:vno-text-6xl">
            Under Maintenance
          </h1>
          <p className="vno-font-light vno-text-gray-500 dark:vno-text-gray-400 md:vno-text-lg xl:vno-text-xl">
            Our Enterprise administrators are performing scheduled maintenance.
          </p>
        </div>
      </section>
    </>
  )
}
