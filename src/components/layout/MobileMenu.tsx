import { type RefObject } from 'react'

import { navItems } from '../../data/landingData'

type MobileMenuProps = {
  isMenuOpen: boolean
  mobileMenuRef: RefObject<HTMLDivElement | null>
  onCloseMenu: () => void
  onTrialClick: () => void
}

export function MobileMenu({
  isMenuOpen,
  mobileMenuRef,
  onCloseMenu,
  onTrialClick,
}: MobileMenuProps) {
  return (
    <div
      ref={mobileMenuRef}
      className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
      id="mobile-menu"
      aria-hidden={!isMenuOpen}
    >
      <nav aria-label="Мобільна навігація">
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={onCloseMenu} tabIndex={isMenuOpen ? undefined : -1}>{label}</a>
        ))}
        <button
          className="button button-primary"
          type="button"
          onClick={onTrialClick}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          Записатись на пробне
          <span aria-hidden="true">→</span>
        </button>
      </nav>
    </div>
  )
}
