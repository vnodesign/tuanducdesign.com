import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

export function SearchModal({ children, ...props }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState(null)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
    setInput('')
  }, [setIsOpen])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          router.push({ pathname: '/search', query: { key: input } })
          setIsOpen(false)
        }
        if (e.key === 'Escape') {
          setIsOpen(false)
          setInput('')
        }
      })
    }
  })
  return (
    <>
      <button type="button" onClick={onOpen} {...props}>
        {children}
      </button>
      <Transition
        show={isOpen}
        as={Fragment}
        className="vno-flex vno-items-center vno-justify-center vno-h-screen"
      >
        <Dialog
          as="div"
          className="vno-fixed vno-inset-0 vno-z-50 vno-flex vno-items-start"
          open={isOpen}
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="vno-fixed vno-inset-0 vno-bg-black/70" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="vno-flex vno-flex-col vno-overflow-hidden vno-z-0 vno-w-full vno-max-w-2xl vno-bg-white dark:vno-bg-slate-800 vno-rounded-lg vno-mx-4 vno-max-h-[80vh] vno-mt-[10vh] vno-relative">
              <div className="vno-relative vno-flex vno-items-center">
                <div className="vno-absolute vno-inset-y-0 vno-left-0 vno-flex vno-items-center vno-pl-4 vno-pointer-events-none">
                  <svg
                    className="vno-w-5 vno-h-5 vno-text-slate-900 dark:vno-text-slate-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="vno-w-full vno-py-4 vno-pl-12 vno-bg-transparent vno-appearance-none vno-text-slate-900 dark:vno-text-slate-200 focus:vno-outline-2 focus:vno-outline-dotted focus:vno-outline-transparent"
                  aria-autocomplete="both"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  placeholder="Tìm kiếm bài viết..."
                  maxLength="64"
                  type="search"
                  id="searchModal"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div className="vno-absolute vno-inset-y-0 vno-right-0 vno-flex vno-items-center vno-pr-3">
                  <button
                    onClick={onClose}
                    className="vno-flex vno-items-center vno-p-1.5 vno-uppercase vno-font-semibold vno-tracking-wider vno-text-slate-900 dark:vno-text-slate-200"
                    type="button"
                  >
                    Esc
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
