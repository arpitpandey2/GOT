import React, { useEffect, useRef, useState } from 'react'
import { PageNav, PageBanner, PageFooter } from '../components/PageShell'
import ERAS from '../data/chronicles'
import './HistoryPage.css'

// ── Era banner: a CSS-only "illustration" standing in for concept art.
// Swap this out later by giving an era an `image` field in chronicles.js
// and rendering an <img> here instead — the rest of the layout won't change.
const EraBanner = ({ era }) => (
  <div className="era-banner" style={{ '--era-i': era.number }}>
    <div className="era-banner-grain" />
    <span className="era-banner-number">{String(era.number).padStart(2, '0')}</span>
    <span className="era-banner-sigil">{era.sigil}</span>
    <h2 className="era-banner-name">{era.name}</h2>
    <span className="era-banner-date">{era.dateRange}</span>
    <p className="era-banner-tagline">"{era.tagline}"</p>
  </div>
)

const EraOverview = ({ paragraphs }) => (
  <div className="era-block">
    <h3 className="era-block-title">Overview</h3>
    <div className="era-overview">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  </div>
)

const EraTimeline = ({ events }) => (
  <div className="era-block">
    <h3 className="era-block-title">Timeline</h3>
    <ul className="era-timeline">
      {events.map((e, i) => (
        <li className="era-timeline-item" key={i}>
          <span className="era-timeline-year">{e.year}</span>
          <div className="era-timeline-content">
            <h4>{e.title}</h4>
            <p>{e.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

const EraFigures = ({ figures }) => (
  <div className="era-block">
    <h3 className="era-block-title">Major Figures</h3>
    <div className="era-figure-grid">
      {figures.map((f, i) => (
        <button className="era-figure-card" key={i} type="button">
          <span className="era-figure-initial">{f.name.charAt(0)}</span>
          <span className="era-figure-name">{f.name}</span>
          <span className="era-figure-title">{f.title}</span>
          <span className="era-figure-blurb">{f.blurb}</span>
        </button>
      ))}
    </div>
  </div>
)

const EraHouses = ({ houses, note }) => (
  <div className="era-block">
    <h3 className="era-block-title">Great Houses of the Era</h3>
    {houses.length > 0 ? (
      <div className="era-chip-row">
        {houses.map((h, i) => (
          <span className="era-chip era-chip-house" key={i} title={h.note}>
            {h.name}
          </span>
        ))}
      </div>
    ) : (
      <p className="era-empty-note">{note}</p>
    )}
  </div>
)

const EraBattles = ({ battles, note }) => (
  <div className="era-block">
    <h3 className="era-block-title">Battles</h3>
    {battles.length > 0 ? (
      <div className="era-battle-grid">
        {battles.map((b, i) => (
          <div className="era-battle-card" key={i}>
            <h4 className="era-battle-name">{b.name}</h4>
            <dl>
              <dt>Where</dt>
              <dd>{b.where}</dd>
              <dt>Winner</dt>
              <dd>{b.winner}</dd>
              <dt>Result</dt>
              <dd>{b.result}</dd>
              <dt>Importance</dt>
              <dd>{b.importance}</dd>
            </dl>
          </div>
        ))}
      </div>
    ) : (
      <p className="era-empty-note">{note || 'No major battles recorded for this era.'}</p>
    )}
  </div>
)

const EraLocations = ({ locations }) => (
  <div className="era-block">
    <h3 className="era-block-title">Important Locations</h3>
    <div className="era-chip-row">
      {locations.map((l, i) => (
        <span className="era-chip era-chip-location" key={i} title={l.note}>
          {l.name}
        </span>
      ))}
    </div>
  </div>
)

const EraLegacy = ({ legacy }) => (
  <div className="era-legacy">
    <span className="era-legacy-label">Legacy</span>
    <p>{legacy}</p>
  </div>
)

const EraSection = ({ era, sectionRef }) => (
  <section className="era-section" id={era.id} ref={sectionRef}>
    <EraBanner era={era} />
    <div className="era-body">
      <EraOverview paragraphs={era.overview} />
      <EraTimeline events={era.timeline} />
      <EraFigures figures={era.figures} />
      <EraHouses houses={era.houses} note={era.housesNote} />
      <EraBattles battles={era.battles} note={era.battlesNote} />
      <EraLocations locations={era.locations} />
      <EraLegacy legacy={era.legacy} />
    </div>
  </section>
)

// ── Sticky sidebar with scroll-spy: highlights whichever era section
// currently occupies the middle of the viewport, and scrolls to a
// section when its pill is clicked.
const ChronicleNav = ({ activeId, onNavigate }) => (
  <>
    <aside className="chronicle-nav">
      <span className="chronicle-nav-label">The Eras</span>
      <ol>
        {ERAS.map(e => (
          <li key={e.id}>
            <button
              className={`chronicle-nav-btn ${activeId === e.id ? 'active' : ''}`}
              onClick={() => onNavigate(e.id)}
              type="button"
            >
              <span className="chronicle-nav-num">{String(e.number).padStart(2, '0')}</span>
              <span className="chronicle-nav-name">{e.name}</span>
            </button>
          </li>
        ))}
      </ol>
    </aside>

    {/* Mobile equivalent: a horizontal scrolling strip instead of a fixed sidebar */}
    <div className="chronicle-nav-mobile">
      {ERAS.map(e => (
        <button
          key={e.id}
          className={`chronicle-nav-mobile-btn ${activeId === e.id ? 'active' : ''}`}
          onClick={() => onNavigate(e.id)}
          type="button"
        >
          {e.number}. {e.name}
        </button>
      ))}
    </div>
  </>
)

const HistoryPage = () => {
  const [activeId, setActiveId] = useState(ERAS[0].id)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    Object.values(sectionRefs.current).forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = id => {
    const el = sectionRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="page-shell">
      <PageNav />
      <PageBanner
        eyebrow="An Interactive History Book"
        title="The Chronicles of Westeros"
        subtitle="From the Dawn Age to the reign of Bran the Broken — thousands of years of wars, kings, dragons, and legends that shaped the Seven Kingdoms."
        sigil="📜"
      />

      <main className="page-content chronicles-content">
        <p className="chronicles-stats">
          {ERAS.length} eras of history, {ERAS.reduce((n, e) => n + e.timeline.length, 0)} chronicled events, one very tired order of maesters
        </p>

        <div className="chronicles-layout">
          <ChronicleNav activeId={activeId} onNavigate={handleNavigate} />

          <div className="chronicles-eras">
            {ERAS.map(era => (
              <EraSection
                key={era.id}
                era={era}
                sectionRef={el => {
                  sectionRefs.current[era.id] = el
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default HistoryPage
