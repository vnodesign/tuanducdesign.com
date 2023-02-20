export function NewsletterForm({ action }) {
  return (
    <form action={action} method="post" className="vno-flex vno-flex-wrap -vno-mx-2">
      <div className="vno-px-2 vno-grow-[9999] vno-basis-64 vno-mt-3">
        <div className="vno-group vno-relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="vno-w-6 vno-h-full vno-absolute vno-inset-y-0 vno-left-3 vno-text-slate-400 vno-pointer-events-none group-focus-within:vno-text-sky-500 dark:group-focus-within:vno-text-slate-400"
          >
            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z" />
            <path d="m6 7 6 5 6-5" />
          </svg>
          <input
            name="email_address"
            type="email"
            required
            autoComplete="email"
            aria-label="Địa chỉ Email"
            className="vno-appearance-none vno-shadow vno-rounded-md vno-ring-1 vno-ring-slate-900/5 vno-leading-5 sm:vno-text-sm vno-border vno-border-transparent vno-py-2 placeholder:vno-text-slate-400 vno-pl-12 vno-pr-3 vno-block vno-w-full vno-text-slate-900 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-sky-500 vno-bg-white dark:vno-bg-slate-700/20 dark:vno-ring-slate-200/20 dark:focus:vno-ring-sky-500 dark:vno-text-white"
            placeholder="Đăng ký nhận bài viết"
          />
        </div>
      </div>
      <div className="vno-px-2 vno-grow vno-flex vno-mt-3">
        <button
          type="submit"
          className="vno-bg-sky-500 vno-flex-auto vno-shadow vno-text-white vno-rounded-md vno-text-sm vno-border-y vno-border-transparent vno-py-2 vno-font-semibold vno-px-3 hover:vno-bg-sky-600 dark:hover:vno-bg-sky-400 focus:vno-outline-none focus:vno-ring-2 focus:vno-ring-offset-2 focus:vno-ring-sky-300 dark:focus:vno-ring-offset-slate-900 dark:focus:vno-ring-sky-700"
        >
          Đăng ký
        </button>
      </div>
    </form>
  )
}
