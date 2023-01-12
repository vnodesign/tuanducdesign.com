import { Disclosure } from '@headlessui/react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { SiPagespeedinsights, SiNginx, SiLinux, SiUbuntu, SiCentos, SiDebian, SiWordpress, SiJoomla, SiDrupal, SiLaravel, SiVultr, SiCodeigniter } from 'react-icons/si'
import { HiServer, HiCode, HiSupport, HiGift, HiCreditCard } from 'react-icons/hi'
import { FaMoneyBill } from 'react-icons/fa'

const featured = [
  {
    title: 'Cài đặt Module PageSpeed của Google',
    description: 'Hàng triệu website đang sử dụng Module PageSpeed của Google trên máy chủ của họ. Không chỉ hỗ trợ tối ưu website trên VPS nó còn giúp bạn defer và async các scripts nguồn ngoài, Chuyển các thẻ script trên head xuống footer để website tải nhanh hơn, async Google Analytics, lazyload ảnh, rút gọn lại head và nhiều tính năng khác.',
    icon: SiPagespeedinsights,
  },
  {
    title: 'Cài đặt Memcached',
    description: 'Memcached là một hệ thống cache hoạt động bằng cách lưu tạm thông tin những dữ liệu bạn hay sử dụng vào bộ nhớ RAM. Do tốc độ đọc ghi của bộ nhớ bao giờ cũng cao hơn so với lưu trữ file nên việc sử dụng memcached giúp cho hệ thống của bạn tăng tốc lên một cách đáng kể.',
    icon: HiServer,
  },
  {
    title: 'Cài đặt Redis',
    description: 'Redis là hệ thống caching lưu trữ dữ liệu trong RAM tương tự như Memcached. Không chỉ hỗ trợ cache dạng keys/values tốt như Memcached mà Redis còn hỗ trợ nhiều cấu trúc dữ liệu khác như hash, list, set, sorted set, string.',
    icon: HiServer,
  },
  {
    title: 'Cài đặt Nginx Amplify',
    description: 'Công cụ hoạt động trên nền tảng điện toán đám mây, được cài đặt thông qua một module của Nginx kết nối với API cung cấp miễn phí bởi Nginx.com, giúp bạn dễ dàng theo dõi hoạt động của hệ thống cũng như chủ động xác định các vấn đề.',
    icon: SiNginx,
  },
]

const tools = [
  {
    title: 'HocVPS Script',
    href: 'https://hocvps.com/',
    icon: SiLinux,
  },
  {
    title: 'HostVN Script',
    href: 'https://hostvn.vn/',
    icon: SiLinux,
  },
  {
    title: 'AAPanel Script',
    href: 'https://www.aapanel.com/',
    icon: SiLinux,
  },
  {
    title: 'LarVPS Script',
    href: 'https://larvps.com/',
    icon: SiLinux,
  },
]

const service = [
  {
    title: 'Hỗ trợ nhanh chóng',
    description: 'Mình hoạt động 24/24 để hỗ trợ bạn các vấn đề, liên quan đến phát triển VPS và tối ưu Website.',
    icon: HiSupport,
  },
  {
    title: 'Dịch vụ thanh toán một lần',
    description: 'Sau khi đăng ký các dịch vụ của mình xong, bạn không phải bỏ ra một khoản phí nào để duy trì nữa.',
    icon: HiCreditCard,
  },
  {
    title: 'Hoàn tiền khi bạn không hài lòng về dịch vụ',
    description: 'Nếu như trong quá trình bạn sử dụng các dịch vụ của mình. Nếu bạn không cảm thấy hài lòng, mình sẽ hoàn trả đúng với số tiền mà bạn đã đăng ký dịch vụ.',
    icon: FaMoneyBill,
  },
  {
    title: 'Nhiều phần quà hấp dẫn dành cho bạn',
    description: 'Sau khi bạn sử dụng các dịch vụ của mình, thì mình có nhiều phần quà hấp dẫn dành tặng cho bạn.',
    icon: HiGift,
  },
]

const osVPS = [
  {
    title: 'Ubuntu',
    description: 'Ubuntu là một hệ điều hành trên máy tính, và nó được phát triển dựa trên Linux/Debian GNU. Lần đầu được giới thiệu vào năm 2004.',
    icon: SiUbuntu,
  },
  {
    title: 'CentOS 7',
    description: 'CentOS 7 được phát hành vào tháng 5 năm 2004.',
    icon: SiCentos,
  },
  {
    title: 'CentOS 8',
    description: 'CentOS 8 được phát hành vào ngày 24 tháng 9 năm 2019.',
    icon: SiCentos,
  },
  {
    title: 'Debian',
    description: 'Debian là một trong những hệ điều hành dựa trên Linux lâu đời nhất hiện nay được phát hành lần đầu tiên vào năm 1993.',
    icon: SiDebian,
  },
]

const sourceCode = [
  {
    title: 'WordPress',
    description: 'WordPress là mã nguồn mở giúp bạn tạo website, blog hay ứng dụng dễ dàng và đẹp mắt.',
    icon: SiWordpress,
  },
  {
    title: 'Joomla',
    description: 'Joomla! là một hệ thống quản lý nội dung (CMS) cho phép bạn xây dựng trang web và ứng dụng trực tuyến mạnh mẽ.',
    icon: SiJoomla,
  },
  {
    title: 'Drupal',
    description: 'Drupal là một khung sườn phát triển phần mềm hướng mô-đun, một hệ quản trị nội dung miễn phí và mã nguồn mở.',
    icon: SiDrupal,
  },
  {
    title: 'Xenforo',
    description: 'Xenforo là mã nguồn mở được xây dựng bởi các lập trình viên tách ra từ nhóm vBullentin (vBB).',
    icon: HiCode,
  },
  {
    title: 'Laravel',
    description: 'Laravel là một trong những PHP Framework phổ biến nhất trên thế giới được sử dụng để xây dựng ứng dụng web từ các dự án nhỏ đến lớn.',
    icon: SiLaravel,
  },
  {
    title: 'Codeigniter',
    description: 'Codeigniter là 1 framework viết bằng ngôn ngữ lập trình PHP dựa trên mô hình MVC.',
    icon: SiCodeigniter,
  },
]

const provider = [
  {
    title: 'Vietnix',
    href: 'https://vietnix.vn/',
    icon: HiServer,
  },
  {
    title: 'Vultr',
    href: 'https://vultr.com/',
    icon: SiVultr,
  },
  {
    title: 'HostVN',
    href: 'https://hostvn.net/',
    icon: HiServer,
  },
  {
    title: 'INET',
    href: 'https://inet.vn/',
    icon: HiServer,
  },
]

const faq = [
  {
    title: 'Mình nên sử dụng VPS CentOS, Ubuntu hay Win Server?',
    description: 'Để sử dụng tốt các dịch vụ mà mình cung cấp. Bạn nên sử dụng VPS chạy hệ điều hành CentOS. Trong trường hợp bạn chạy Web ASP.NET, bạn hãy sử dụng VPS Win Server.',
  },
  {
    title: 'Mình nên sử dụng máy chủ Apache, Nginx hay máy chủ LiteSpeed?',
    description: 'Để sử dụng tốt các dịch vụ mà mình cung cấp, mình khuyên bạn nên sử dụng máy chủ Nginx hoặc máy chủ LiteSpeed, để đáp ứng mọi nhu cầu, Với máy chủ Apache nó tiêu tốn nhiều tài nguyên hơn, Nên mình sẽ không hỗ trợ bạn tối ưu trên máy chủ này nhé.',
  },
  {
    title: 'Cấu hình hệ thống trên Server bao nhiêu là đủ với website của mình?',
    description: 'Tùy nhu cầu sử dụng của bạn! Thông thường đối với một website tin tức nhiều ảnh như mã nguồn WordPress, Thì CPU thường là 2 CPU, Ram là 4GB RAM và phân vùng hệ thống là 250GB SSD.',
  },
  {
    title: 'Mình có phải mất thêm tiền để duy trì dịch vụ của bạn?',
    description: 'Bạn chỉ cần đăng ký một lần là lần sau không cần phải đóng thêm phí, để duy trì các dịch vụ mà bạn đã mua của mình nữa.',
  },
]

export default function Service() {
  return (
    <div>
      <PageSEO title={`Dịch vụ - ${siteMetadata.title}`} description={siteMetadata.description} breadcrumb={true} />
      <section id="hero" className="vno-py-4 vno-bg-white lg:vno-pt-20 lg:vno-pb-16 dark:vno-bg-gray-900">
        <div className="vno-max-w-8xl vno-px-4 vno-mx-auto lg:vno-text-center">
          <Link
            className="vno-inline-flex vno-items-center vno-justify-between vno-pl-1 vno-py-1 vno-pr-4 vno-mb-5 vno-text-sm vno-text-gray-700 vno-bg-gray-100 vno-rounded-full dark:vno-bg-gray-800 dark:vno-text-white hover:vno-bg-gray-200"
            role="alert"
            href="https://vietnix.vn/cloud-vps-gia-re/"
          >
            <span className="vno-text-xs vno-bg-blue-600 vno-rounded-full vno-text-white vno-px-4 vno-py-1.5 vno-mr-3">
              Mới
            </span>
            <span className="vno-mr-2 vno-text-sm vno-font-medium">
              Chào bạn, ở đây mình đang có dịch vụ VPS mà bạn đang cần tìm này! Xem thêm
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="vno-w-5 vno-h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="vno-mb-4 vno-text-4xl vno-font-bold vno-tracking-tight vno-text-gray-900 lg:vno-font-extrabold lg:vno-text-6xl lg:vno-leading-none dark:vno-text-white lg:vno-text-center xl:vno-px-36 lg:vno-mb-7">
            Dịch vụ tối ưu VPS và Website tại <span className="vno-font-bold vno-text-sky-500 dark:vno-text-sky-400">Tuan Duc Design</span>
          </h1>
          <p className="vno-mb-10 vno-text-lg vno-font-normal vno-text-gray-500 dark:vno-text-gray-400 lg:vno-text-center lg:vno-text-xl xl:vno-px-60">
            Chuyên cung cấp dịch vụ VPS và Website, Hướng dẫn bảo mật VPS và Website từ cơ bản đến nâng cao cho người không chuyên, Hỗ trợ cài đặt VPS, Tối ưu VPS thông qua Module PageSpeed của Google, Cài đặt Memcached, Redis, SSL và Cloudflare.
          </p>
          <div className="vno-flex vno-flex-col vno-mb-8 md:vno-flex-row lg:vno-justify-center">
            <Link
              href="https://www.facebook.com/tuanduc.support"
              className="vno-text-white vno-bg-blue-600 hover:vno-bg-blue-700 focus:vno-ring-4 focus:vno-ring-blue-300 dark:focus:vno-ring-blue-800 vno-font-medium vno-rounded-lg vno-text-base vno-px-6 vno-py-2.5 vno-text-center md:vno-mr-5 vno-mb-3 md:vno-mb-0 vno-inline-flex vno-items-center vno-justify-center"
            >
              Kết nối với mình trên Facebook
            </Link>
            <Link
              href="https://github.com/tuanducdesign/"
              className="vno-text-gray-600 vno-bg-white-100 hover:vno-bg-gray-100 hover:vno-text-blue-600 vno-border vno-border-gray-200 dark:vno-text-gray-400 dark:hover:vno-bg-gray-700 dark:hover:vno-text-white dark:vno-border-gray-600 vno-font-medium vno-rounded-lg vno-text-base vno-px-6 vno-py-2.5 vno-text-center vno-inline-flex vno-justify-center vno-items-center"
            >
              Theo dõi mình trên GitHub
            </Link>
          </div>
        </div>
      </section>
      <section id="featured" className="vno-py-10 vno-bg-gray-50 dark:vno-bg-gray-800">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Dịch vụ
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Dịch vụ nổi bật tại Tuan Duc Design
            </h2>
            <p className="vno-max-w-2xl vno-mx-auto vno-text-xl vno-text-gray-500 dark:vno-text-gray-400">
              Bạn đang quan tâm đến các dịch vụ nổi bật của mình? Dưới đây là một số dịch vụ nổi bật của mình có thể nó sẽ hữu ích với bạn.
            </p>
          </div>
          <div className="vno-mt-10">
            <dl className="vno-space-y-10 md:vno-grid md:vno-grid-cols-2 md:vno-gap-x-8 md:vno-gap-y-10 md:vno-space-y-0">
              {featured.map(({ title, description, icon: Icon }) => (
                <div
                key={title}
                className="vno-relative vno-p-3 vno-bg-white vno-rounded-lg dark:vno-bg-gray-900 vno-border vno-border-gray-200 dark:vno-border-gray-700"
                >
                  <dt>
                    <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                      <Icon className="vno-w-6 vno-h-6 vno-text-white" />
                    </div>
                    <p className="vno-ml-16 vno-text-lg vno-font-medium vno-leading-6 vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </p>
                  </dt>
                  <dd className="vno-mt-2 vno-ml-16 vno-text-base vno-text-gray-500 dark:vno-text-gray-400">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section id="tools" className="vno-py-10 vno-bg-white dark:vno-bg-gray-900">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Công cụ
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Công cụ sử dụng trên VPS
            </h2>
            <p className="text-xl vno-max-w-2xl vno-mx-auto">
              Tuan Duc Design luôn chọn các công cụ mới nhất để giúp khách hàng của mình quản lý VPS dễ dàng.
            </p>
          </div>
          <div className="vno-mt-10">
            <div className="vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 sm:vno-gap-4 sm:vno-space-y-0 lg:vno-grid-cols-4 xl:vno-gap-8">
              {tools.map(({ title, href, icon: Icon }) => (
                <div
                  key={title}
                  className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-border vno-border-gray-200 vno-bg-gray-50 dark:vno-bg-gray-800 dark:vno-border-gray-700"
                >
                  <Link href={href} title={title}>
                    <Icon className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-900 dark:vno-text-white" />
                    <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="vno-py-10 vno-bg-gray-50 dark:vno-bg-gray-800">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Lý do lựa chọn
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Dịch vụ của Tuan Duc Design có gì tốt?
            </h2>
          </div>
          <div className="vno-mt-10">
            <dl className="vno-space-y-10 md:vno-grid md:vno-grid-cols-2 md:vno-gap-x-8 md:vno-gap-y-10 md:vno-space-y-0">
              {service.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="vno-relative vno-p-3"
                >
                  <dt>
                    <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                      <Icon className="vno-w-6 vno-h-6 vno-text-white" />
                    </div>
                    <p className="vno-ml-16 vno-text-lg vno-font-medium vno-leading-6 vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </p>
                  </dt>
                  <dd className="vno-mt-2 vno-ml-16 vno-text-base vno-text-gray-500 dark:vno-text-gray-400">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section id="os-vps" className="vno-py-10 vno-bg-white dark:vno-bg-gray-900">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Hệ điều hành
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Hệ điều hành sử dụng trên VPS
            </h2>
            <p className="vno-max-w-2xl vno-mx-auto vno-text-xl vno-text-gray-500 dark:vno-text-gray-400">
              Tuan Duc Design luôn chọn hệ điều hành CentOS hoặc Ubuntu để hỗ trợ khách hàng dễ dàng khi sử dụng dịch vụ của mình.
            </p>
          </div>
          <div className="vno-mt-10">
            <dl className="vno-space-y-10 md:vno-grid md:vno-grid-cols-2 md:vno-gap-x-8 md:vno-gap-y-10 md:vno-space-y-0">
              {osVPS.map(({ title, description, icon: Icon }) => (
                <div
                key={title}
                className="vno-relative vno-p-3 vno-bg-gray-50 vno-rounded-lg dark:vno-bg-gray-800 vno-border vno-border-gray-200 dark:vno-border-gray-700"
                >
                  <dt>
                    <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                      <Icon className="vno-w-6 vno-h-6 vno-text-white" />
                    </div>
                    <p className="vno-ml-16 vno-text-lg vno-font-medium vno-leading-6 vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </p>
                  </dt>
                  <dd className="vno-mt-2 vno-ml-16 vno-text-base vno-text-gray-500 dark:vno-text-gray-400">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section id="source-code" className="vno-py-10 vno-bg-gray-50 dark:vno-bg-gray-800">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Mã nguồn
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Hỗ trợ cài đặt mã nguồn
            </h2>
            <p className="vno-max-w-2xl vno-mx-auto vno-text-xl vno-text-gray-500 dark:vno-text-gray-400">
              Những mã nguồn phổ biến trên thế giới như WordPress, Joomla, Drupal, Xenforo, Laravel, Codeigniter.
            </p>
          </div>
          <div className="vno-mt-10">
            <dl className="vno-space-y-10 md:vno-grid md:vno-grid-cols-2 md:vno-gap-x-8 md:vno-gap-y-10 md:vno-space-y-0">
              {sourceCode.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="vno-relative vno-p-3 vno-bg-white vno-rounded-lg dark:vno-bg-gray-900 vno-border vno-border-gray-200 dark:vno-border-gray-700"
                >
                  <dt>
                    <div className="vno-absolute vno-flex vno-items-center vno-justify-center vno-w-12 vno-h-12 vno-bg-sky-500 dark:vno-bg-sky-400 vno-rounded-lg">
                      <Icon className="vno-w-6 vno-h-6 vno-text-white" />
                    </div>
                    <p className="vno-ml-16 vno-text-lg vno-font-medium vno-leading-6 vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </p>
                  </dt>
                  <dd className="vno-mt-2 vno-ml-16 vno-text-base vno-text-gray-500 dark:vno-text-gray-400">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section id="provider" className="vno-py-10 vno-bg-white dark:vno-bg-gray-900">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              Nhà cung cấp
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Nhà cung cấp VPS và Hosting
            </h2>
            <p className="vno-max-w-2xl vno-mx-auto vno-text-xl vno-text-gray-500 dark:vno-text-gray-400">
              Hỗ trợ khách hàng tốt khi khách hàng sử dụng các nhà cung cấp hàng đầu thế giới.
            </p>
          </div>
          <div className="vno-mt-10">
            <div className="vno-space-y-4 sm:vno-grid sm:vno-grid-cols-2 sm:vno-gap-4 sm:vno-space-y-0 lg:vno-grid-cols-4 xl:vno-gap-8">
              {provider.map(({ title, href, icon: Icon }) => (
                <div
                  key={title}
                  className="vno-block vno-px-8 vno-py-12 vno-text-center vno-rounded-lg vno-bg-gray-50 dark:vno-bg-gray-800 vno-border vno-border-gray-200 dark:vno-border-gray-700"
                >
                  <Link href={href} title={title}>
                    <Icon className="vno-w-12 vno-h-12 vno-mx-auto vno-text-gray-900 dark:vno-text-white" />
                    <h3 className="vno-mt-3.5 vno-text-xl vno-font-semibold vno-text-gray-900 dark:vno-text-white">
                      {title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="vno-py-10 vno-bg-gray-50 dark:vno-bg-gray-800">
        <div className="vno-max-w-screen-xl vno-p-5 vno-mx-auto">
          <div className="vno-text-center">
            <div className="vno-text-lg vno-font-semibold vno-text-sky-500 dark:vno-text-sky-400">
              FAQ
            </div>
            <h2 className="vno-my-4 vno-text-3xl vno-font-bold vno-leading-8 vno-tracking-tight vno-text-gray-900 sm:vno-text-4xl dark:vno-text-white">
              Câu hỏi thường gặp
            </h2>
            <p className="vno-max-w-2xl vno-mx-auto vno-text-xl vno-text-gray-500 dark:vno-text-gray-400">
              Tìm kiếm câu hỏi thường gặp của bạn, khi sử dụng các dịch vụ tại Tuan Duc Design.
            </p>
          </div>
          <div className="vno-mt-10 vno-mx-auto">
            <div className="vno-shadow vno-divide-y vno-divide-gray-200 dark:vno-divide-gray-700 vno-border-gray-200 dark:vno-border-gray-700">
              {faq.map(faq => (
                <FaqItem key={faq.title} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem(props) {

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`vno-flex vno-w-full vno-items-center vno-justify-between vno-px-5 vno-py-5 vno-text-left vno-font-medium vno-bg-white dark:vno-bg-gray-900 vno-text-gray-900 dark:vno-text-white vno-transition ${
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
            <Disclosure.Panel className="vno-bg-white dark:vno-bg-gray-900 vno-text-gray-900 dark:vno-text-white vno-p-5">
              {props.description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
