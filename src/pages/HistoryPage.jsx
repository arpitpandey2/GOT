import React from 'react'
import PageShell from '../components/PageShell'
import './HistoryPage.css'

const ERAS = [
  {
    era: 'The Dawn Age',
    date: '10,000+ years ago',
    title: 'The Age of Heroes',
    body: 'Before the written word, the First Men crossed a land bridge into Westeros, bringing bronze and the worship of nameless nature gods. The Children of the Forest, who had lived there since the dawn of days, met them with war.',
  },
  {
    era: 'The Long Night',
    date: 'circa 8,000 years ago',
    title: 'The War for the Dawn',
    body: 'A generation of endless winter fell upon the world, and with it came the Others, sweeping down from the Land of Always Winter. Men and Children fought side by side to survive it, and raised the Wall to make certain it could never happen again.',
  },
  {
    era: 'The Andal Invasion',
    date: 'circa 6,000 years ago',
    title: 'The Coming of the Andals',
    body: 'Warlike settlers from Essos crossed the narrow sea bearing steel and the Faith of the Seven. Kingdom by kingdom, the First Men fell — all but the North, where the old gods and the old blood endured.',
  },
  {
    era: 'The Valyrian Freehold',
    date: 'circa 400 years before the Conquest',
    title: 'The Doom of Valyria',
    body: 'Across the sea, the dragonlords of Valyria built the greatest civilisation the world had known — until a single catastrophic day, the Doom, swallowed their peninsula in fire. Of their dragon-riding houses, only the exiled Targaryens survived.',
  },
  {
    era: "Aegon's Conquest",
    date: '2 BC – 1 AC',
    title: 'Fire and Blood',
    body: 'Aegon Targaryen and his sister-wives landed at the mouth of the Blackwater with three dragons and a claim on the whole continent. Six kingdoms bent the knee; Dorne alone held out for another century.',
  },
  {
    era: 'The Targaryen Dynasty',
    date: '1 AC – 283 AC',
    title: 'Three Centuries of Dragons',
    body: 'Nearly three hundred years of Targaryen rule, marked by the Dance of the Dragons, mad kings, and the slow death of dragonkind — until Aerys II earned the name Mad King and burned his own claim to ash.',
  },
  {
    era: "Robert's Rebellion",
    date: '282 – 283 AC',
    title: "The Usurper's War",
    body: 'A stolen bride and a murdered heir set the Seven Kingdoms alight. Robert Baratheon broke the Targaryen line at the Trident, and the Iron Throne changed hands in fire at King\'s Landing.',
  },
  {
    era: 'The War of the Five Kings',
    date: '298 – 300 AC',
    title: 'When You Play the Game of Thrones',
    body: 'A king\'s death unravelled two decades of uneasy peace. Stark, Lannister, Baratheon, Greyjoy and Tyrell all raised crowns and banners, and the realm bled from five directions at once.',
  },
]

const HistoryPage = () => {
  return (
    <PageShell
      eyebrow="A Chronicle of Ages"
      title="History"
      subtitle="Ten thousand years of kingdoms rising and falling, distilled from the pages of the Citadel's maesters."
      sigil="📜"
    >
      <div className="timeline">
        <div className="timeline-spine" />
        {ERAS.map((e, i) => (
          <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={e.title}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-era">{e.era}</span>
              <span className="timeline-date">{e.date}</span>
              <h2 className="timeline-title">{e.title}</h2>
              <p className="timeline-body">{e.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

export default HistoryPage
