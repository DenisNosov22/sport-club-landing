import { type FormEvent, useCallback, useRef, useState } from 'react'

import { MobileMenu } from './components/layout/MobileMenu'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { PricingSection } from './components/sections/PricingSection'
import { ProgramsSection } from './components/sections/ProgramsSection'
import { ScheduleSection } from './components/sections/ScheduleSection'
import { StartSection } from './components/sections/StartSection'
import { StatsStrip } from './components/sections/StatsStrip'
import { TrainersSection } from './components/sections/TrainersSection'
import { programs } from './data/landingData'
import { useBodyLock } from './hooks/useBodyLock'
import { useCloseOnMediaQuery } from './hooks/useCloseOnMediaQuery'
import { useFocusTrap } from './hooks/useFocusTrap'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(programs[0].title)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useBodyLock(isMenuOpen)
  useCloseOnMediaQuery('(min-width: 980px)', closeMenu)
  useFocusTrap(isMenuOpen, mobileMenuRef, menuToggleRef, closeMenu)

  const scrollToTrial = (programTitle = selectedProgram) => {
    setSelectedProgram(programTitle)
    closeMenu()
    window.setTimeout(() => {
      document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.alert(`Дякуємо! Заявку на напрям "${selectedProgram}" зафіксовано у demo-формі.`)
  }

  return (
    <div className="site-shell">
      <SiteHeader
        isMenuOpen={isMenuOpen}
        menuToggleRef={menuToggleRef}
        onCloseMenu={closeMenu}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        mobileMenuRef={mobileMenuRef}
        onCloseMenu={closeMenu}
        onTrialClick={() => scrollToTrial()}
      />

      <main id="top">
        <HeroSection onTrialClick={() => scrollToTrial()} />
        <StatsStrip />
        <ProgramsSection onTrialClick={scrollToTrial} />
        <StartSection />
        <TrainersSection />
        <ScheduleSection onTrialClick={() => scrollToTrial()} />
        <PricingSection onTrialClick={() => scrollToTrial()} />
        <ContactSection
          selectedProgram={selectedProgram}
          onProgramChange={setSelectedProgram}
          onSubmit={handleSubmit}
        />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
