import React from 'react'
import PageShell from '../components/PageShell'
import './WorldPage.css'

const REGIONS = [
  {
    name: 'The North',
    seat: 'Winterfell',
    warden: 'House Stark',
    image: '/images/one.jpg',
    accent: '#8fafc4',
    description:
      'Larger than the other six kingdoms combined, a land of pine forests, granite peaks and long, silent winters. Beyond its northern edge stands the Wall — three hundred miles of ice guarding the realm from what sleeps beyond.',
  },
  {
    name: 'The Vale',
    seat: 'The Eyrie',
    warden: 'House Arryn',
    image: '/images/two.jpg',
    accent: '#9fb8c9',
    description:
      'A mountain fastness reached by a single perilous road, protected by the Bloody Gate and the Mountains of the Moon. The Eyrie itself is said to be unconquerable — no army has ever taken it by force.',
  },
  {
    name: 'The Riverlands',
    seat: 'Riverrun',
    warden: 'House Tully',
    image: '/images/three.png',
    accent: '#7a9bb0',
    description:
      'A fertile crossroads of trout-filled rivers and open fields, and for that reason the most fought-over ground in Westeros. Whoever holds the Trident holds the road between the North and the South.',
  },
  {
    name: 'The Westerlands',
    seat: 'Casterly Rock',
    warden: 'House Lannister',
    image: '/images/four.webp',
    accent: '#d4a84b',
    description:
      'Gold runs through these hills as surely as it runs through the veins of the house that rules them. Casterly Rock itself is carved from a mountain of ore, a fortress no siege has ever cracked.',
  },
  {
    name: 'The Reach',
    seat: 'Highgarden',
    warden: 'House Tyrell',
    image: '/images/five.jpg',
    accent: '#5a9e48',
    description:
      'The breadbasket of the Seven Kingdoms — orchards, vineyards and wheat fields stretching to every horizon. Highgarden rises from the plenty like a garden grown into a castle.',
  },
  {
    name: 'The Stormlands',
    seat: "Storm's End",
    warden: 'House Baratheon',
    image: '/images/six.jpg',
    accent: '#c9a84c',
    description:
      "Battered by storms rolling off the Narrow Sea, this coastal kingdom is named for the weather it endures. Storm's End has never fallen to siege or storm alike in all its long history.",
  },
  {
    name: 'Dorne',
    seat: 'Sunspear',
    warden: 'House Martell',
    image: '/images/one.jpg',
    accent: '#c0392b',
    description:
      'Red sand, scorching sun, and a people who never bent the knee to dragons until they chose to. Dorne alone in Westeros governs itself by different law, and guards its borders with poison and patience.',
  },
  {
    name: 'The Crownlands',
    seat: "King's Landing",
    warden: 'The Iron Throne',
    image: '/images/three.png',
    accent: '#e8c97a',
    description:
      "The seat of royal power itself, built by Aegon the Conqueror where his dragon Balerion first landed. Half a million souls crowd its streets, ruled from the Red Keep above the bay.",
  },
  {
    name: 'The Iron Islands',
    seat: 'Pyke',
    warden: 'House Greyjoy',
    image: '/images/five.jpg',
    accent: '#6a7a8a',
    description:
      'A scatter of rocky islands where longships outnumber ploughs. The ironborn pay the iron price, not the gold one — what they cannot take by the sword, they do not believe they deserve.',
  },
]

const WorldPage = () => {
  return (
    <PageShell
      eyebrow="A Map of Westeros"
      title="The World"
      subtitle="Nine kingdoms bound by one crown, from the frozen Wall in the north to the red sands of Dorne in the south."
      sigil="✦"
    >
      <div className="world-intro">
        <p>
          Westeros stretches over three thousand miles, from the icy Lands of Always Winter
          to the sun-baked shores of the Summer Sea. Nine great regions, each once its own
          kingdom, now answer — however unwillingly — to whoever sits the Iron Throne.
          Beyond the narrow sea lies Essos, older and stranger still, but it is here in the
          Seven Kingdoms that the game of thrones is played.
        </p>
      </div>

      <div className="regions-list">
        {REGIONS.map((r, i) => (
          <article className="region-row" key={r.name} style={{ '--accent': r.accent }}>
            <div className="region-row-image" style={{ backgroundImage: `url(${r.image})` }}>
              <span className="region-row-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="region-row-body">
              <span className="region-row-warden">{r.warden} · {r.seat}</span>
              <h2 className="region-row-name">{r.name}</h2>
              <p className="region-row-desc">{r.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="world-beyond">
        <div className="world-beyond-divider"><span /><em>✦</em><span /></div>
        <h3>Beyond the Known Map</h3>
        <p>
          North of the Wall lie the true unknown lands — haunted forest, frozen coast, and
          things older than House or Kingdom. East across the narrow sea sprawls Essos, home
          to the Free Cities, the Dothraki Sea, and the ruins of Old Valyria. Few who go
          looking for what lives in either place return to tell of it.
        </p>
      </div>
    </PageShell>
  )
}

export default WorldPage
