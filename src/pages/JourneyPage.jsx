import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './JourneyPage.css'

const PATHS = [
  {
    to: '/history',
    label: 'Read the History',
    sigil: '📜',
    desc: 'Start at the beginning — the Age of Heroes, the Doom of Valyria, and the wars that shaped every house still standing.',
  },
  {
    to: '/houses',
    label: 'Learn the Houses',
    sigil: '⚔',
    desc: 'Meet the seven great houses and the words, sigils and ambitions that set them against one another.',
  },
  {
    to: '/characters',
    label: 'Meet the Players',
    sigil: '♜',
    desc: 'The lords, exiles and heirs whose choices are already deciding who lives to see the next winter.',
  },
  {
    to: '/world',
    label: 'Walk the Realm',
    sigil: '🗺',
    desc: 'From the Wall to Dorne — the nine kingdoms bound, however unwillingly, beneath one throne.',
  },
]

const JourneyPage = () => {
  return (
    <PageShell
      eyebrow="Prologue"
      title="Begin the Journey"
      subtitle="Every chronicle starts somewhere. Choose the path that calls to you — you can always double back."
      sigil="✦"
    >
      <div className="journey-lede">
        <p>
          A thousand years of kings, a hundred houses, and a single throne built from the
          swords of the conquered. There is no single door into this story — only the one
          you choose to open first.
        </p>
      </div>

      <div className="journey-paths">
        {PATHS.map((p, i) => (
          <Link to={p.to} className="journey-path" key={p.to} style={{ '--i': i }}>
            <span className="journey-path-sigil">{p.sigil}</span>
            <h2 className="journey-path-label">{p.label}</h2>
            <p className="journey-path-desc">{p.desc}</p>
            <span className="journey-path-arrow">Enter →</span>
          </Link>
        ))}
      </div>

      <div className="journey-quote">
        <p>"The night is dark and full of terrors, but the fire burns them all away."</p>
      </div>
    </PageShell>
  )
}

export default JourneyPage
