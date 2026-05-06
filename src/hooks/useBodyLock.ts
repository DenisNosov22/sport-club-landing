import { useEffect } from 'react'

export function useBodyLock(isLocked: boolean) {
  useEffect(() => {
    document.body.classList.toggle('menu-open', isLocked)

    return () => document.body.classList.remove('menu-open')
  }, [isLocked])
}
