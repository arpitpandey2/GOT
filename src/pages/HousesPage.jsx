import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { HOUSES } from '../data/houses'
import './HousesPage.css'

const HousesPage = () => {
  const [searchParams] = useSearchParams()
  const requestedHouse = searchParams.get('house')
  const initialHouse = HOUSES.some(h => h.id === requestedHouse) ? requestedHouse : HOUSES[0].id

  const [active, setActive] = useState(initialHouse)
  const house = HOUSES.find(h => h.id === active)

  return (
    <PageShell
      eyebrow="Blood and Banners"
      title="The Great Houses"
      subtitle="Twelve great houses shaped the fate of Westeros. Choose one to discover its history."
      sigil="⚔"
    >
      
      <div className="house-detail" style={{ '--accent': house.accent, background: house.bg }}>
        <div className="house-detail-image" style={{ backgroundImage: `url(${house.sigil_url})`, borderColor: house.borderColor }} />
        <div className="house-detail-body">
          <span className="house-detail-region">{house.region} · {house.seat}</span>
          <h2 className="house-detail-name">House {house.name}</h2>
          <p className="house-detail-words">{house.words}</p>
          <p className="house-detail-desc">{house.description}</p>
          <div className="house-detail-facts">
            <div>
              <span className="fact-label">Sigil</span>
              <span className="fact-value">{house.sigil}</span>
            </div>
            <div>
              <span className="fact-label">Founded</span>
              <span className="fact-value">{house.founded}</span>
            </div>
            <div className="fact-wide">
              <span className="fact-label">Notable Members</span>
              <span className="fact-value">{house.notableMembers?.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="houses-mini-grid">
        {HOUSES.map(h => (
          <button
            key={h.id}
            className={`houses-mini-card ${active === h.id ? 'active' : ''}`}
            style={{ '--accent': h.accent }}
            onClick={() => setActive(h.id)}
          >
            <span className="mini-card-name">{h.name}</span>
            <span className="mini-card-seat">{h.seat}</span>
          </button>
        ))}
      </div>
    </PageShell>
  )
}

export default HousesPage
