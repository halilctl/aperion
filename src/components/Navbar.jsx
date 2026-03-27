import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = ['Hizmetler', 'Hakkımızda', 'Süreç', 'İletişim']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, target) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>APERION</span>
        </a>

        {/* Nav links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.navLink}
              onClick={(e) => handleNav(e, `#${link.toLowerCase()}`)}
            >
              {link}
            </a>
          ))}
          <a href="#iletişim" className="btn-primary" onClick={(e) => handleNav(e, '#iletişim')}>
            <span>Teklif Al</span>
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
