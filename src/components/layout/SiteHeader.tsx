import { type RefObject } from 'react'

import { navItems } from '../../data/landingData'

type SiteHeaderProps = {
  isMenuOpen: boolean
  menuToggleRef: RefObject<HTMLButtonElement | null>
  onCloseMenu: () => void
  onToggleMenu: () => void
}

export function SiteHeader({
  isMenuOpen,
  menuToggleRef,
  onCloseMenu,
  onToggleMenu,
}: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Головна навігація">
      <a className="brand" href="#top" aria-label="MOVE Sport Club головна" onClick={onCloseMenu}>
        <span className="brand-name">MOVE</span>
        <span className="brand-subtitle">Sport Club</span>
      </a>
      <nav className="desktop-nav" aria-label="Секції сайту">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
      <button
        ref={menuToggleRef}
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={onToggleMenu}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
