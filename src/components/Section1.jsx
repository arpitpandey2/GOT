import React, { useEffect, useRef, useState } from 'react'
import './Section1.css'
import { HOUSES } from '../data/houses'

const HouseCard = ({ house, index }) => {
  const cardRef   = useRef(null)
  const sigilRef  = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  // Staggered entrance via IntersectionObserver
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 120)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  // Sigil tilt on hover
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14
    if (sigilRef.current) {
      sigilRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.06)`
    }
  }
  const handleMouseLeave = () => {
    if (sigilRef.current) sigilRef.current.style.transform = ''
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={`house-card house-card--${house.id}`}
      style={{ '--accent': house.accent, '--border': house.borderColor, background: house.bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Corner ornaments */}
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />

      {/* Glow pulse on hover */}
      <div className="card-glow" />

      {/* Sigil */}
      <div ref={sigilRef} className="house-sigil-wrap">
        {!imgError ? (
          <img
            className="house-sigil-img"
            src={house.sigil_url}
            alt={`House ${house.name} sigil`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="house-sigil-fallback">{house.sigil[0]}</div>
        )}
        <div className="sigil-ring" />
      </div>

      {/* Static content */}
      <div className={`house-content ${hovered ? 'content-hidden' : ''}`}>
        <p className="house-region">{house.region}</p>
        <div className="house-divider">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>
        <h2 className="house-name">HOUSE<br />{house.name}</h2>
        <p className="house-seat">{house.seat}</p>
        <p className="house-sigil-label">{house.sigil}</p>
      </div>

      {/* Hover reveal: words + description */}
      <div className={`house-hover-content ${hovered ? 'hover-visible' : ''}`}>
        <p className="hover-words">{house.words}</p>
        <div className="house-divider hover-divider">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>
        <h2 className="hover-name">HOUSE {house.name}</h2>
        <p className="hover-desc">{house.description}</p>
      </div>

      {/* Bottom accent bar */}
      <div className="card-accent-bar" />
    </div>
  )
}

const Section1 = () => {
  const sectionRef   = useRef(null)
  const headingRef   = useRef(null)
  const subRef       = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, subRef.current].filter(Boolean)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 150)
          )
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section1">

      {/* Ambient background texture */}
      <div className="section1-bg-texture" />
      <div className="section1-bg-vignette" />

      {/* Section header */}
      <header className="section1-header">
        <p ref={subRef} className="section1-eyebrow fade-up">THE GREAT HOUSES OF WESTEROS</p>
        <div className="header-ornament">
          <span className="ornament-line" />
          <span className="ornament-rune">✦</span>
          <span className="ornament-line" />
        </div>
        <h1 ref={headingRef} className="section1-title fade-up">
          The Noble<br />
          <em>Houses</em>
        </h1>
        <p className="section1-subtitle fade-up">
          Seven kingdoms. Six great houses. One Iron Throne.
        </p>
      </header>

      {/* Houses grid */}
      <div className="houses-grid">
        {HOUSES.map((house, i) => (
          <HouseCard key={house.id} house={house} index={i} />
        ))}
      </div>

      {/* Section footer ornament */}
      <div className="section1-footer-ornament">
        <span className="footer-line" />
        <span className="footer-sigil">⚔</span>
        <span className="footer-line" />
      </div>

    </section>
  )
}

export default Section1