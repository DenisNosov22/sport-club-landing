import { type RefObject, useEffect } from 'react'

export function useFocusTrap(
  isActive: boolean,
  containerRef: RefObject<HTMLElement | null>,
  returnFocusRef: RefObject<HTMLElement | null>,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!isActive) {
      return undefined
    }

    const focusableSelector = 'a[href], button:not([disabled])'
    const focusableItems = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
    )
    focusableItems[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape()
        returnFocusRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusableItems.length === 0) {
        return
      }

      const firstItem = focusableItems[0]
      const lastItem = focusableItems[focusableItems.length - 1]

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [containerRef, isActive, onEscape, returnFocusRef])
}
