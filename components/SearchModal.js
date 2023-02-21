import { Fragment, useState, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import posts from '../json/posts.json'
import { dateSortDesc } from '@/lib/dateSortDesc'
import Link from './Link'
import searchModalNoResults from '../data/searchModalNoResults'

posts.sort((a, b) => dateSortDesc(a.frontmatter.date, b.frontmatter.date))

export function SearchModal({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState(null)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
    setInput('')
  }, [setIsOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const filteredBlogPosts = posts.filter((post) => {
    if (post.frontmatter.title.toLowerCase().includes(input)) {
      return post
    } else if (post.frontmatter.tags.find((tag) => tag.toLowerCase().includes(input))) {
      return post
    } else if (post.frontmatter.summary.toLowerCase().includes(input)) {
      return post
    }
  })

  // If posts exist, display it if no input is specified
  const displayPosts = posts.length > 0 && !input ? posts : filteredBlogPosts

  return (
    <>
      <button type="button" onClick={onOpen} {...props}>
        {children}
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="vno-w-screen vno-h-screen vno-fixed vno-z-[200] vno-top-0 vno-left-0 vno-cursor-auto vno-flex vno-flex-col vno-bg-black/20 vno-backdrop-blur-sm vno-p-4 sm:vno-p-6 md:vno-p-[10vh] lg:vno-p-[12vh] dark:vno-bg-slate-900/80"
          open={isOpen}
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="vno-my-0 vno-mx-auto vno-w-full vno-max-w-[47.375rem] vno-flex vno-flex-col vno-min-h-0 vno-rounded-lg vno-shadow-lg vno-bg-white dark:vno-bg-slate-800 dark:vno-shadow-white/5">
              <div className="vno-z-[1] vno-py-0 vno-px-4 vno-flex-none vno-relative vno-flex vno-items-center vno-border-b vno-border-slate-100 dark:vno-border-slate-200/5">
                <form className="vno-flex-auto vno-flex vno-items-center vno-min-w-0">
                  <div className="vno-w-5 vno-h-5">
                    <svg
                      className="vno-text-slate-900 dark:vno-text-slate-200"
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
                    className="vno-appearance-none vno-bg-transparent vno-h-14 vno-text-base sm:vno-text-xs vno-leading-none vno-text-slate-900 vno-ml-3 vno-mr-4 vno-flex-auto vno-min-w-0 dark:vno-text-slate-200"
                    aria-autocomplete="both"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="Tìm kiếm bài viết..."
                    maxLength="64"
                    type="search"
                    id="searchModal"
                    onChange={handleSearch}
                  />
                  <button
                    onClick={onClose}
                    className="vno-appearance-none vno-flex-none vno-rounded-md vno-py-[0.25rem] vno-px-[0.375rem] vno-ring-1 vno-ring-slate-900/5 vno-shadow-sm hover:vno-ring-slate-900/10 hover:vno-shadow dark:vno-ring-0 dark:vno-bg-slate-600 vno-text-xs"
                    type="button"
                  >
                    ESC
                  </button>
                </form>
              </div>
              <div className="vno-overflow-auto vno-flex-auto">
                {!displayPosts.length && (
                  <div className="vno-pt-10 vno-px-4 vno-pb-8">
                    <p className="vno-text-center vno-text-slate-400 vno-mb-10 vno-text-lg vno-leading-6">
                      Không tìm thấy kết quả cho "
                      <strong className="vno-text-slate-900 vno-font-normal dark:vno-text-slate-200">
                        {input}
                      </strong>
                      "
                    </p>
                    <div>
                      <p className="vno-text-sm vno-leading-6 vno-font-semibold vno-mb-3 vno-text-slate-900 dark:vno-text-slate-200">
                        Có thể bạn quan tâm:
                      </p>
                      <ul className="vno-rounded-lg vno-bg-slate-50 vno-border vno-border-slate-200 dark:vno-bg-slate-700/30 dark:vno-border-slate-700 vno-overflow-hidden">
                        {searchModalNoResults.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              title={item.title}
                              className="vno-block vno-py-[0.5rem] vno-px-[0.75rem] vno-w-full vno-text-left vno-text-sm vno-leading-6 vno-text-slate-700 dark:vno-text-slate-400 dark:hover:vno-text-slate-200 dark:hover:vno-bg-white/[0.02]"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {displayPosts && (
                  <ul>
                    {displayPosts.map((post) => (
                      <li key={post.slug} className="vno-relative">
                        <Link
                          href={`/blog/${post.slug}`}
                          title={post.frontmatter.title}
                          className="vno-block vno-px-6 vno-py-4 vno-relative hover:vno-bg-slate-50 dark:hover:vno-bg-slate-700/[0.16] vno-border-y vno-border-slate-100 dark:vno-border-slate-200/5"
                        >
                          <div className="vno-flex vno-items-center">
                            <div className="vno-flex vno-flex-auto vno-flex-col-reverse vno-min-w-0 vno-z-[1]">
                              {post.frontmatter.title}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
