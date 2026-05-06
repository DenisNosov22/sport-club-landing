import { useEffect } from 'react'

export function useCloseOnMediaQuery(query: string, onMatch: () => void) {
  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const closeOnMatch = () => {
      if (mediaQuery.matches) {
        onMatch()
      }
    }

    closeOnMatch()
    mediaQuery.addEventListener('change', closeOnMatch)

    return () => mediaQuery.removeEventListener('change', closeOnMatch)
  }, [onMatch, query])
}
