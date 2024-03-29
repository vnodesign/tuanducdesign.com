import { useTheme } from './Theme'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

let themes = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    label: 'System',
    icon: PcIcon,
  },
]

function SunIcon({ selected, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className={
          selected
            ? 'vno-fill-sky-400/20 vno-stroke-sky-500'
            : 'vno-stroke-slate-400 dark:vno-stroke-slate-500'
        }
      />
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className={
          selected ? 'vno-stroke-sky-500' : 'vno-stroke-slate-400 dark:vno-stroke-slate-500'
        }
      />
    </svg>
  )
}

function MoonIcon({ selected, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className={selected ? 'vno-fill-sky-400/20' : 'vno-fill-transparent'}
      />
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className={selected ? 'vno-fill-sky-500' : 'vno-fill-slate-400 dark:vno-fill-slate-500'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className={selected ? 'vno-fill-sky-500' : 'vno-fill-slate-400 dark:vno-fill-slate-500'}
      />
    </svg>
  )
}

function PcIcon({ selected, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className={
          selected
            ? 'vno-fill-sky-400/20 vno-stroke-sky-500'
            : 'vno-stroke-slate-400 dark:vno-stroke-slate-500'
        }
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          selected ? 'vno-stroke-sky-500' : 'vno-stroke-slate-400 dark:vno-stroke-slate-500'
        }
      />
    </svg>
  )
}

export function ThemeToggle({ panelClassName = 'vno-mt-4' }) {
  let [theme, setTheme] = useTheme()

  return (
    <>
      <Listbox value={theme} onChange={setTheme}>
        <Listbox.Label className="vno-sr-only">Theme</Listbox.Label>
        <Listbox.Button type="button">
          <span className="dark:vno-hidden">
            <SunIcon className="vno-h-6 vno-w-6" selected={theme !== 'system'} />
          </span>
          <span className="vno-hidden dark:vno-inline">
            <MoonIcon className="vno-h-6 vno-w-6" selected={theme !== 'system'} />
          </span>
        </Listbox.Button>
        <Listbox.Options
          className={clsx(
            'vno-absolute vno-top-full vno-right-0 vno-z-50 vno-w-36 vno-overflow-hidden vno-rounded-lg vno-bg-white vno-py-1 vno-text-sm vno-font-semibold vno-text-slate-700 vno-shadow-lg vno-ring-1 vno-ring-slate-900/10 dark:vno-bg-slate-800 dark:vno-text-slate-300 dark:vno-ring-0',
            panelClassName
          )}
        >
          {themes.map(({ value, label, icon: Icon }) => (
            <Listbox.Option key={value} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={clsx(
                    'vno-flex vno-cursor-pointer vno-items-center vno-py-1 vno-px-2',
                    selected && 'vno-text-sky-500',
                    active && 'vno-bg-slate-50 dark:vno-bg-slate-600/30'
                  )}
                >
                  <Icon selected={selected} className="vno-mr-2 vno-h-6 vno-w-6" />
                  {label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  )
}

export function ThemeSelect() {
  let [theme, setTheme] = useTheme()

  let { label } = themes.find((x) => x.value === theme)

  return (
    <div className="vno-flex vno-items-center vno-justify-between">
      <label htmlFor="theme" className="vno-font-normal vno-text-slate-700 dark:vno-text-slate-400">
        Switch theme
      </label>
      <div className="vno-relative vno-flex vno-items-center vno-rounded-lg vno-p-2 vno-font-semibold vno-text-slate-700 vno-shadow-sm vno-ring-1 vno-ring-slate-900/10 dark:vno-bg-slate-600 dark:vno-text-slate-200 dark:vno-ring-0">
        <SunIcon className="vno-mr-2 vno-h-6 vno-w-6 dark:vno-hidden" />
        <MoonIcon className="vno-mr-2 vno-hidden vno-h-6 vno-w-6 dark:vno-block" />
        {label}
        <svg className="vno-ml-2 vno-h-6 vno-w-6 vno-text-slate-400" fill="none">
          <path
            d="m15 11-3 3-3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="vno-absolute vno-inset-0 vno-h-full vno-w-full vno-appearance-none vno-opacity-0"
        >
          {themes.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
