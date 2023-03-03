import { useLayoutEffect, useEffect, useRef } from 'react'
import { create } from 'zustand'

const useSettingTheme = create((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme }),
}))

function update(theme) {
  if (theme === 'dark') {
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
  const { theme, setTheme } = useSettingTheme()
  const initial = useRef(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    } else {
      setTheme('system')
    }
  }, [setTheme])

  useEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', theme)
    }
    if (!initial.current) {
      update(theme)
    } else {
      initial.current = false
    }
  }, [theme])

  useLayoutEffect(() => {
    update(theme)
  }, [theme])

  return [theme, setTheme]
}
