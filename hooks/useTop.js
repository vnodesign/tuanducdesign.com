import { useState, useEffect } from 'react'
import { useRect } from '@reach/rect'

export function useTop(ref) {
  const [top, setTop] = useState()
  const rect = useRect(ref)
  const rectTop = rect?.top

  useEffect(() => {
    if (typeof rectTop === 'undefined') return
    const newTop = rectTop + window.pageYOffset
    setTop(prevTop => (prevTop === newTop ? prevTop : newTop))
  }, [rectTop])

  return top
}
