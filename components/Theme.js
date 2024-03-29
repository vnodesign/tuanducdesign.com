import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { create } from 'zustand'
import { useEffect, useRef } from 'react'

const useSettingTheme = create((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme }),
}))

function update() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
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
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', update)

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
    window.addEventListener('load', update)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', update)

      window.removeEventListener('storage', onStorage)
    }
  }, [setTheme])

  return [theme, setTheme]
}
