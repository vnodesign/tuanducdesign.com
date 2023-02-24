import { Fragment, useState, useCallback, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Router from 'next/router'
import { useActionKey } from '@/hooks/useActionKey'
import posts from '../json/posts.json'
import kebabCase from '@/lib/utils/kebabCase'
import formatDate from '@/lib/utils/formatDate'
import { dateSortDesc } from '@/lib/dateSortDesc'
import Link from './Link'

posts.sort((a, b) => dateSortDesc(a.frontmatter.date, b.frontmatter.date))

export function SearchModal({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  let searchButtonRef = useRef(null)
  let actionKey = useActionKey()

  useEffect(() => {
    if (!isOpen) return
    function handleRouteChange() {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
          setInput('')
        }
      })
    }
  }, [isOpen])

  useEffect(() => {
    function onKeyDown(e) {
      if (searchButtonRef && searchButtonRef.current === document.activeElement && setInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))) {
          setInput(e)
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [setInput, searchButtonRef])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
    setInput('')
  }, [setIsOpen])

  useEffect(() => {
    function onKeyDown(event) {
      function open() {
        // We check that no other SearchModal is showing before opening
        // another one.
        if (!document.body.classList.contains('SearchModal--show')) {
          onOpen()
        }
      }

      if (
        (event.keyCode === 27 && isOpen) ||
        (event.key === 'k' && (event.metaKey || event.ctrlKey))
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('SearchModal--show')) {
          open()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])

  const handleSearch = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const searchResults = posts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().includes(input) ||
      post.frontmatter.summary.toLowerCase().includes(input)
    )
  })

  return (
    <>
      <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
        {typeof children === 'function' ? children({ actionKey }) : children}
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="vno-fixed vno-inset-0 vno-z-50 vno-flex vno-justify-center vno-items-start"
          open={isOpen}
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="vno-ease-out vno-duration-300"
            enterFrom="vno-opacity-0"
            enterTo="vno-opacity-100"
            leave="vno-ease-in vno-duration-200"
            leaveFrom="vno-opacity-100"
            leaveTo="vno-opacity-0"
          >
            <Dialog.Overlay className="vno-fixed vno-inset-0 vno-bg-black/70" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="vno-ease-out vno-duration-300"
            enterFrom="vno-opacity-0 vno-scale-95"
            enterTo="vno-opacity-100 vno-scale-100"
            leave="vno-ease-in vno-duration-200"
            leaveFrom="vno-opacity-100 vno-scale-100"
            leaveTo="vno-opacity-0 vno-scale-95"
          >
            <div className="vno-flex vno-flex-col vno-overflow-hidden vno-z-0 vno-w-full vno-max-w-2xl vno-rounded-lg vno-mx-4 vno-mt-[10vh] vno-relative vno-bg-white dark:vno-bg-slate-800">
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
                  className="vno-w-full vno-py-4 vno-pl-12 vno-outline-none vno-appearance-none vno-bg-transparent vno-border-b vno-border-slate-100 dark:vno-border-slate-200/5 vno-placeholder-gray-400"
                  placeholder="Tìm kiếm bài viết..."
                  type="text"
                  onChange={handleSearch}
                />
                <div className="vno-absolute vno-inset-y-0 vno-right-0 vno-flex vno-items-center vno-pr-3">
                  <button
                    onClick={onClose}
                    className="vno-flex vno-items-center vno-p-1.5 vno-uppercase vno-font-semibold vno-tracking-wider vno-rounded-md vno-border vno-border-slate-100 dark:vno-border-slate-200/5 vno-text-xs"
                    type="button"
                  >
                    Esc
                  </button>
                </div>
              </div>
              {!searchResults.length && (
                <div className="vno-p-10">
                  <p className="vno-text-lg vno-text-center vno-text-slate-400">
                    Không tìm thấy kết quả...
                  </p>
                </div>
              )}
              {searchResults && (
                <ul className="vno-max-h-[70vh] vno-overflow-y-auto">
                  {searchResults.map((post) => (
                    <li
                      key={post.slug}
                      className="vno-relative vno-flex vno-items-center vno-px-4 vno-py-2.5 vno-group vno-cursor-pointer hover:vno-bg-slate-50 dark:hover:vno-bg-slate-700/[0.16]"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        title={post.frontmatter.title}
                        className="focus:vno-outline-none"
                      >
                        <span className="vno-absolute vno-inset-0" />
                      </Link>
                      <div>
                        <div className="vno-font-semibold">{post.frontmatter.title}</div>
                        <div className="vno-text-xs vno-mt-1">
                          <Link
                            href={`/blog/tags/${kebabCase(post.frontmatter.tags[0])}`}
                            title={post.frontmatter.tags[0]}
                            className="vno-relative hover:vno-underline vno-z-[1]"
                          >
                            {post.frontmatter.tags[0]}
                          </Link>{' '}
                          - {formatDate(post.frontmatter.date)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
