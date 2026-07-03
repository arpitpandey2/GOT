import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './PageShell.css'

const NAV_LINKS = [
  { to: '/world', label: 'The World' },
  { to: '/characters', label: 'Characters' },
  { to: '/houses', label: 'Houses' },
  { to: '/history', label: 'History' },
]

export const PageNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`page-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="page-nav-logo">Game of Thrones</Link>
      <ul className={`page-nav-links ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <li key={l.to}>
            <NavLink to={l.to} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="page-nav-burger" aria-label="Toggle navigation" onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}

export const PageBanner = ({ eyebrow, title, subtitle, sigil = '✦' }) => (
  <header className="page-banner">
    <div className="page-banner-grain" />
    <div className="page-banner-inner">
      <span className="page-banner-sigil">{sigil}</span>
      <div className="page-banner-divider">
        <span className="line" /><span className="diamond" /><span className="line right" />
      </div>
      {eyebrow && <span className="page-banner-eyebrow">{eyebrow}</span>}
      <h1 className="page-banner-title">{title}</h1>
      {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
    </div>
  </header>
)

export const PageFooter = () => (
  <footer className="page-footer">
    <div className="page-footer-ornament">
      <span className="footer-line" />
      <span className="footer-sigil">⚔</span>
      <span className="footer-line" />
    </div>
    <p className="page-footer-text">Game of Thrones — The Chronicles of Westeros</p>
    <Link to="/" className="page-footer-home">Return to the Throne Room</Link>
  </footer>
)

const PageShell = ({ eyebrow, title, subtitle, sigil, children, className = '' }) => (
  <div className={`page-shell ${className}`}>
    <PageNav />
    <PageBanner eyebrow={eyebrow} title={title} subtitle={subtitle} sigil={sigil} />
    <main className="page-content">{children}</main>
    <PageFooter />
  </div>
)

export default PageShell
