import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import './RealmPage.css'

const MAP_REGIONS = [
  { id: 'north', name: 'The North', area: 'north', accent: '#8fafc4', image: '/images/one.jpg', houseId: 'stark', desc: 'Vast, cold, and guarded by the Wall. Home to House Stark and the old gods.' },
  { id: 'iron', name: 'Iron Islands', area: 'iron', accent: '#6a7a8a', image: '/images/five.jpg', houseId: 'greyjoy', desc: 'Rocky islands ruled by House Greyjoy, who pay the iron price for all they own.' },
  { id: 'vale', name: 'The Vale', area: 'vale', accent: '#9fb8c9', image: '/images/two.jpg', houseId: null, desc: 'Mountain stronghold of House Arryn, entered only through the Bloody Gate.' },
  { id: 'riverlands', name: 'The Riverlands', area: 'river', accent: '#7a9bb0', image: '/images/three.png', houseId: null, desc: 'Fertile and unwalled, the most fought-over ground in the Seven Kingdoms.' },
  { id: 'westerlands', name: 'The Westerlands', area: 'west', accent: '#d4a84b', image: '/images/two.jpg', houseId: 'lannister', desc: 'Gold country, seat of House Lannister at Casterly Rock.' },
  { id: 'crownlands', name: 'The Crownlands', area: 'crown', accent: '#e8c97a', image: '/images/three.png', houseId: 'targaryen', desc: "Home to King's Landing and the Iron Throne itself." },
  { id: 'reach', name: 'The Reach', area: 'reach', accent: '#5a9e48', image: '/images/six.jpg', houseId: 'tyrell', desc: 'Rich farmland ruled from Highgarden by House Tyrell.' },
  { id: 'stormlands', name: 'The Stormlands', area: 'storm', accent: '#c9a84c', image: '/images/four.webp', houseId: 'baratheon', desc: "Storm-battered coast, seat of House Baratheon at Storm's End." },
  { id: 'dorne', name: 'Dorne', area: 'dorne', accent: '#c0392b', image: '/images/one.jpg', houseId: null, desc: 'Desert kingdom of House Martell, the only realm Aegon never conquered.' },
]

const RealmPage = () => {
  const [active, setActive] = useState(MAP_REGIONS[0])

  return (
    <PageShell
      eyebrow="An Interactive Atlas"
      title="Explore the Realm"
      subtitle="Select a kingdom on the map to uncover who rules it, and why it matters."
      sigil="🗺"
    >
      <div className="realm-layout">
        <div className="realm-map">
          {MAP_REGIONS.map(r => (
            <button
              key={r.id}
              className={`realm-tile realm-${r.area} ${active.id === r.id ? 'active' : ''}`}
              style={{ '--accent': r.accent }}
              onClick={() => setActive(r)}
            >
              <span>{r.name}</span>
            </button>
          ))}
        </div>

        <aside className="realm-panel" style={{ '--accent': active.accent }}>
          <div className="realm-panel-image" style={{ backgroundImage: `url(${active.image})` }} />
          <div className="realm-panel-body">
            <span className="realm-panel-eyebrow">Selected Kingdom</span>
            <h2 className="realm-panel-name">{active.name}</h2>
            <p className="realm-panel-desc">{active.desc}</p>
            <div className="realm-panel-line" />
            {active.houseId ? (
              <Link to={`/houses?house=${active.houseId}`} className="realm-panel-link">
                View Ruling House →
              </Link>
            ) : (
              <p className="realm-panel-hint">Click any region on the map to learn more about the lands that make up Westeros.</p>
            )}
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

export default RealmPage