import Link from './Link'

export default function Featured() {
  return (
    <Link
      href="https://hr.penci.me"
      className="vno-items-center vno-hidden vno-px-3 vno-py-1 vno-ml-3 vno-text-xs vno-font-medium vno-leading-5 vno-rounded-full vno-text-sky-600 dark:vno-text-sky-400 vno-bg-sky-400/10 xl:vno-flex hover:vno-bg-sky-400/20"
      title="Nền tảng chia sẻ kiến thức về IT và Design"
    >
      <strong className="vno-font-semibold">HR Documentation</strong>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="vno-ml-2 vno-text-sky-600 dark:vno-text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1" />
      </svg>
      <span className="vno-ml-2 min-[1372px]:vno-hidden">
        Nền tảng chia sẻ kiến thức và tài liệu về IT và Design
      </span>
      <span className="vno-ml-2 vno-hidden min-[1372px]:vno-inline">
        Nền tảng chia sẻ kiến thức và tài liệu về IT và Design
      </span>
      <svg
        width="3"
        height="6"
        className="vno-ml-3 vno-overflow-visible vno-text-sky-300 dark:vno-text-sky-400"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
