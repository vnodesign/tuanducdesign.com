/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext, createContext, useRef } from 'react'
import { useTop } from '@/hooks/useTop'
import clsx from 'clsx'

const CustomHeading = ({ level, id, children, ...props }) => {
  let Component = level
  const context = useContext(createContext)

  let ref = useRef()
  let top = useTop(ref)

  useEffect(() => {
    if (!context) return
    if (typeof top !== 'undefined') {
      context.registerHeading(id, top)
    }
    return () => {
      context.unregisterHeading(id)
    }
  }, [top, id, context?.registerHeading, context?.unregisterHeading])

  return (
    <Component
      className={clsx(
        'vno-group vno-flex vno-whitespace-pre-wrap',
        level === 'h2' &&
          'vno-mb-2 vno-text-sm vno-font-semibold vno-leading-6 vno-tracking-normal vno-text-sky-500 dark:vno-text-sky-400'
      )}
      id={id}
      ref={ref}
      {...props}
    >
      <a
        href={`#${id}`}
        className="vno-absolute -vno-ml-10 vno-flex vno-items-center !vno-border-0 vno-opacity-0 group-hover:vno-opacity-100"
        aria-label="Anchor"
      >
        &#8203;
        <div className="vno-flex vno-h-6 vno-w-6 vno-items-center vno-justify-center vno-rounded-md vno-text-slate-400 vno-shadow-sm vno-ring-1 vno-ring-slate-900/5 hover:vno-text-slate-700 hover:vno-shadow hover:vno-ring-slate-900/10 dark:vno-bg-slate-700 dark:vno-text-slate-300 dark:vno-shadow-none dark:vno-ring-0">
          <svg width="12" height="12" fill="none" aria-hidden="true">
            <path
              d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </a>
      <span>{children}</span>
    </Component>
  )
}

export const H1 = (props) => <CustomHeading level="h1" {...props} />
export const H2 = (props) => <CustomHeading level="h2" {...props} />
export const H3 = (props) => <CustomHeading level="h3" {...props} />
export const H4 = (props) => <CustomHeading level="h4" {...props} />
export const H5 = (props) => <CustomHeading level="h5" {...props} />
export const H6 = (props) => <CustomHeading level="h6" {...props} />
