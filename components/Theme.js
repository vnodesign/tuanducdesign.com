import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { create } from 'zustand'
import { useEffect, useRef } from 'react'

const useSettingTheme = create((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme }),
}))

function update() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f8fafc')
  }
}

export function useTheme() {
  let { theme, setTheme } = useSettingTheme()
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setTheme(theme)
    } else {
      setTheme('system')
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
    } else if (theme === 'light' || theme === 'dark') {
      localStorage.theme = theme
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [theme])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    function onStorage() {
      update()
      let theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setTheme(theme)
      } else {
        setTheme('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [setTheme])

  return [theme, setTheme]
}
