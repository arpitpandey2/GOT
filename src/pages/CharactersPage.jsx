import React, { useMemo, useState } from 'react'
import PageShell from '../components/PageShell'
import './CharactersPage.css'

const CHARACTERS = [
  // ───────────── HOUSE STARK ─────────────
  {
    name: 'Jon Snow',
    house: 'Stark',
    title: 'Lord Commander of the Night\'s Watch',
    accent: '#8fafc4',
    quote: '"I did not want this. Any of it."',
    bio: 'Raised as a bastard of Winterfell, sworn to the Wall, and torn between duty and blood. Jon carries the weight of two houses without fully belonging to either.',
    image: '/photos/jonsnow.avif',
  },
  {
    name: 'Arya Stark',
    house: 'Stark',
    title: 'No One',
    accent: '#8fafc4',
    quote: '"A girl has no name."',
    bio: 'Once a lord\'s daughter who preferred a sword to a needle, now something else entirely. Her list of names is long, and she has already crossed off more than most soldiers manage in a lifetime.',
    image: '/photos/Arya_Stark.webp',
  },
  {
    name: 'Eddard Stark',
    house: 'Stark',
    title: 'Warden of the North',
    accent: '#8fafc4',
    quote: '"The man who passes the sentence should swing the sword."',
    bio: 'Honour-bound to a fault, Ned ruled the North with a code that had no place in the capital he was called south to serve.',
    image: '/photos/Eddard_Stark.webp',
  },
  {
    name: 'Sansa Stark',
    house: 'Stark',
    title: 'Lady of Winterfell',
    accent: '#8fafc4',
    quote: '"I\'m a slow learner, it\'s true, but I learn."',
    bio: 'What began as a girl\'s dream of songs and princes was ground down into something far more dangerous: a survivor who now plays the game better than her captors ever did.',
    image: '/photos/Sansa_Stark.webp',
  },
  {
    name: 'Bran Stark',
    house: 'Stark',
    title: 'The Three-Eyed Raven',
    accent: '#8fafc4',
    quote: '"I remember everything."',
    bio: 'A broken boy who climbed a tower and fell into a far stranger fate — keeper of memory for a world that keeps forgetting its own history.',
    image: '/photos/KingBran.PNG.webp',
  },
  {
    name: 'Catelyn Stark',
    house: 'Stark',
    title: 'Lady of Winterfell',
    accent: '#8fafc4',
    quote: '"The next time you raise a hand to my son will be the last time you have hands."',
    bio: 'Born a Tully but bound to the North by marriage, Catelyn\'s fierce love for her children drives every decision she makes. Her mistrust of Tyrion Lannister sets off a chain of war she never intended to start.',
    image: '/photos/Catelyn_Stark.webp',
  },
  {
    name: 'Robb Stark',
    house: 'Stark',
    title: 'King in the North',
    accent: '#8fafc4',
    quote: '"Give the order, mother. I don\'t want to."',
    bio: 'Eddard\'s eldest son and heir, crowned King in the North after his father\'s execution. A gifted commander undone by a broken promise and a wedding he should never have trusted.',
    image: '/photos/Robb_Stark.webp',
  },
  {
  name: 'Rickon Stark',
  house: 'Stark',
  title: 'Youngest Son of Winterfell',
  accent: '#8fafc4',
  quote: '"I can be brave."',
  bio: 'The youngest of Ned Stark\'s children, Rickon spends much of his short life fleeing the war that destroys his family. His tragic fate becomes one of the many prices House Stark pays for the struggle for the North.',
  image: '/photos/Rickon_Stark.jpg',
  },
  {
  name: 'Benjen Stark',
  house: 'Stark',
  title: 'First Ranger of the Night\'s Watch',
  accent: '#8fafc4',
  quote: '"The Wall protects the realm from what lies beyond."',
  bio: 'Eddard Stark\'s younger brother and First Ranger of the Night\'s Watch, Benjen disappears beyond the Wall while investigating strange happenings, later returning as an unlikely guardian against the dead.',
  image: '/photos/Benjen_Stark.webp',
  },
  {
  name: 'Lyanna Stark',
  house: 'Stark',
  title: 'The Wolf Maid',
  accent: '#8fafc4',
  quote: '"Promise me, Ned."',
  bio: 'Sister of Eddard Stark and the woman whose secret changed the fate of Westeros. Her final request to her brother protected the true identity of her son, Jon Snow, for decades.',
  image: '/photos/Lyanna_Stark.jpg',
  },

  // ───────────── HOUSE LANNISTER ─────────────
  {
    name: 'Tyrion Lannister',
    house: 'Lannister',
    title: 'Hand of the King',
    accent: '#d4a84b',
    quote: '"A mind needs books as a sword needs a whetstone."',
    bio: 'The dwarf son of Casterly Rock, underestimated at every turn and sharper for it. His wit has saved more lives than any sword in Westeros.',
    image: '/photos/Tyrion_Lannister.webp',
  },
  {
    name: 'Cersei Lannister',
    house: 'Lannister',
    title: 'Queen Regent',
    accent: '#d4a84b',
    quote: '"When you play the game of thrones, you win or you die."',
    bio: 'Beautiful, ruthless, and consumed by the fear of losing what she has clawed her way to. She trusts no one, least of all the family she rules beside.',
    image: '/photos/Cersei_I_Lannister.webp',
  },
  {
    name: 'Jaime Lannister',
    house: 'Lannister',
    title: 'Lord Commander of the Kingsguard',
    accent: '#d4a84b',
    quote: '"The things we do for love."',
    bio: 'Called Kingslayer for a single act no one bothered to understand. Beneath the golden armour is a man still arguing with his own reputation.',
    image: '/photos/Jaime_Lannister.webp',
  },
  {
    name: 'Tywin Lannister',
    house: 'Lannister',
    title: 'Lord of Casterly Rock',
    accent: '#d4a84b',
    quote: '"A lion doesn\'t concern himself with the opinion of a sheep."',
    bio: 'The iron hand behind House Lannister\'s power, unmoved by sentiment and unwilling to let a single failure — including his own son — go unpunished.',
    image: '/photos/Tywin_Lannister_4x08.webp',
  },
  {
  name: 'Kevan Lannister',
  house: 'Lannister',
  title: 'Hand of the King',
  accent: '#d4a84b',
  quote: '"Your father understood duty. I only hope to serve as well."',
  bio: 'Tywin Lannister\'s younger brother and one of House Lannister\'s most dependable commanders. Loyal, pragmatic, and respected, Kevan briefly serves as Hand of the King before becoming a victim of Varys\' grand design.',
  image: '/photos/Kevan_Lannister.jpg',
  },
  {
  name: 'Lancel Lannister',
  house: 'Lannister',
  title: 'Knight of House Lannister',
  accent: '#d4a84b',
  quote: '"The gods have a plan for us all."',
  bio: 'A cousin of Cersei, Jaime, and Tyrion, Lancel begins as an eager young knight before guilt over King Robert\'s death drives him toward the Faith Militant and a life of religious devotion.',
  image: '/photos/Lancel_Lannister.webp',
  },

  // ───────────── HOUSE TARGARYEN ─────────────
  {
    name: 'Daenerys Targaryen',
    house: 'Targaryen',
    title: 'Mother of Dragons',
    accent: '#c0392b',
    quote: '"I will take what is mine, with fire and blood."',
    bio: 'The last scion of a fallen dynasty, hatched from exile into a conqueror. Three dragons and an army of followers stand between her and the throne her family lost.',
    image: '/photos/Daenerys_Targaryen.jpg',
  },
  {
  name: 'Rhaegar Targaryen',
  house: 'Targaryen',
  title: 'Crown Prince of the Seven Kingdoms',
  accent: '#c0392b',
  quote: '"There must be one more. The dragon has three heads."',
  bio: 'The eldest son of the Mad King, Rhaegar was admired as a warrior and scholar alike. His secret marriage to Lyanna Stark and the birth of Jon Snow would alter the fate of Westeros forever.',
  image: '/photos/Rhaegar_Targaryen.jpg',
  },
  {
  name: 'Aerys II Targaryen',
  house: 'Targaryen',
  title: 'The Mad King',
  accent: '#c0392b',
  quote: '"Burn them all!"',
  bio: 'The last Targaryen king to sit the Iron Throne before Robert\'s Rebellion. Consumed by paranoia and madness, Aerys earned the name "The Mad King" and brought his dynasty to ruin.',
  image: '/photos/Aerys_II_Targaryen.jpg',
  },
  {
    name: 'Viserys Targaryen',
    house: 'Targaryen',
    title: 'The Beggar King',
    accent: '#c0392b',
    quote: '"I am the Dragon. Dragons don\'t bow to sheep."',
    bio: 'Daenerys\'s elder brother, exiled and obsessed with reclaiming a throne he was never fit to hold. His cruelty toward his own sister costs him everything.',
    image: '/photos/Viserys_Targaryen.webp',
  },

  // ───────────── HOUSE BARATHEON ─────────────
  {
    name: 'Robert Baratheon',
    house: 'Baratheon',
    title: 'King of the Seven Kingdoms',
    accent: '#c9962c',
    quote: '"I was born to be a warrior, and by all the Gods, I was good at it."',
    bio: 'The rebel who broke the Targaryen dynasty now sits restless on the throne he won, bored by rule and trapped in a marriage that was never a love match.',
    image: '/photos/Robert_Baratheon.webp',
  },
  {
    name: 'Stannis Baratheon',
    house: 'Baratheon',
    title: 'Lord of Dragonstone',
    accent: '#c9962c',
    quote: '"There is only one true war. The Great War."',
    bio: 'Robert\'s humourless younger brother, convinced the throne is his by law and by right. His pursuit of the crown leads him down a darker path than he ever imagined.',
    image: '/photos/Stannis_Baratheon.webp',
  },
  {
    name: 'Renly Baratheon',
    house: 'Baratheon',
    title: 'Lord of Storm\'s End',
    accent: '#c9962c',
    quote: '"Why should I be the one who kneels?"',
    bio: 'Robert\'s youngest brother, charming and well-loved, who builds a claim to the throne on popularity rather than birthright — and pays for it before the crown ever touches his head.',
    image: '/photos/Renly_Baratheon.jpg',
  },
  {
    name: 'Joffrey Baratheon',
    house: 'Baratheon',
    title: 'King of the Seven Kingdoms',
    accent: '#c9962c',
    quote: '"Everyone is mine to torment."',
    bio: 'A boy-king with none of his mother\'s patience and all of her cruelty, mistaking fear for respect until a wedding feast catches up with him.',
    image: '/photos/Joffrey_Baratheon.jpg',
  },
  {
    name: 'Tommen Baratheon',
    house: 'Baratheon',
    title: 'King of the Seven Kingdoms',
    accent: '#c9962c',
    quote: '"Ours is the fury."',
    bio: 'Gentle where his brother was vicious, Tommen inherits a throne he never wanted and a mother\'s war he never asked to fight, undone by grief he cannot survive.',
    image: '/photos/Tommen_Baratheon.webp',
  },
  {
  name: 'Myrcella Baratheon',
  house: 'Baratheon',
  title: 'Princess of the Seven Kingdoms',
  accent: '#c9962c',
  quote: '"I am glad to be going to Dorne."',
  bio: 'The only daughter of Cersei Lannister and Jaime Lannister, Myrcella is raised as Robert Baratheon\'s child. Gentle and kind-hearted, she becomes an innocent victim of the conflict between Dorne and the Iron Throne.',
  image: '/photos/Myrcella_Baratheon.jpg',
  },
  {
  name: 'Gendry Baratheon',
  house: 'Baratheon',
  title: 'Lord of Storm\'s End',
  accent: '#c9962c',
  quote: '"I know who I am. I am Robert Baratheon son."',
  bio: 'The unacknowledged bastard of King Robert Baratheon, Gendry begins life as a humble blacksmith before fighting beside Jon Snow and Daenerys. He is later legitimized as Lord of Storm\'s End.',
  image: '/photos/Gendry_Baratheon.webp',
  },
  {
  name: 'Shireen Baratheon',
  house: 'Baratheon',
  title: 'Princess of Dragonstone',
  accent: '#c9962c',
  quote: '"No one is ashamed of you, sweet girl."',
  bio: 'The gentle and intelligent daughter of Stannis Baratheon, Shireen befriends Davos Seaworth and dreams of a better future, only to become one of the most heartbreaking sacrifices of the war.',
  image: '/photos/Shireen_Baratheon.webp',
  },

  // ───────────── HOUSE TYRELL ─────────────
  {
    name: 'Margaery Tyrell',
    house: 'Tyrell',
    title: 'Queen of the Seven Kingdoms',
    accent: '#6b9b46',
    quote: '"I don\'t want to be a queen. I want to be the queen."',
    bio: 'Ambitious and clever, Margaery moves from one royal marriage to the next, using kindness as a weapon in a court that only respects strength.',
    image: '/photos/Margaery_Tyrell.webp',
  },
  {
    name: 'Olenna Tyrell',
    house: 'Tyrell',
    title: 'The Queen of Thorns',
    accent: '#6b9b46',
    quote: '"I\'ve outlived six kings. Nine, if you count the Targaryens."',
    bio: 'The sharp-tongued matriarch of House Tyrell, unafraid to say what everyone else in King\'s Landing only dares to think, and willing to poison a king to protect her family.',
    image: '/photos/Olenna_Tyrell.webp',
  },
  {
  name: 'Mace Tyrell',
  house: 'Tyrell',
  title: 'Lord of Highgarden',
  accent: '#6b9b46',
  quote: '"Our roses have never been stronger."',
  bio: 'Lord of Highgarden and Warden of the South, Mace Tyrell enjoys the prestige of his house while much of its political brilliance comes from his formidable mother, Olenna Tyrell.',
  image: '/photos/Mace_Tyrell.jpg',
  },
  {
  name: 'Loras Tyrell',
  house: 'Tyrell',
  title: 'The Knight of Flowers',
  accent: '#6b9b46',
  quote: '"When the sun has set, no candle can replace it."',
  bio: 'Celebrated throughout Westeros for his skill in tournaments, Ser Loras Tyrell serves in the Kingsguard while hiding a forbidden love that ultimately leads to his downfall.',
  image: '/photos/Loras_Tyrell.jpg',
  },

  // ───────────── HOUSE GREYJOY ─────────────
  {
    name: 'Theon Greyjoy',
    house: 'Greyjoy',
    title: 'Prince of the Iron Islands',
    accent: '#5b6770',
    quote: '"I am Theon Greyjoy, the last living son of Balon Greyjoy."',
    bio: 'Raised as a Stark ward but never quite a Stark, Theon\'s attempt to prove himself to his true family costs him his identity — and very nearly his life.',
    image: '/photos/Theon_Greyjoy.webp',
  },
  {
    name: 'Yara Greyjoy',
    house: 'Greyjoy',
    title: 'Captain of the Black Wind',
    accent: '#5b6770',
    quote: '"I don\'t beg. Not to gods, not to men."',
    bio: 'A fearless reaver and captain in her own right, Yara fights for her brother, her fleet, and a claim to the Salt Throne that her uncle refuses to hand over easily.',
    image: '/photos/Yara_Greyjoy.webp',
  },
  {
    name: 'Euron Greyjoy',
    house: 'Greyjoy',
    title: 'King of the Iron Islands',
    accent: '#5b6770',
    quote: '"I\'m the storm, my lord. The first storm, and the last."',
    bio: 'A self-styled king who seized the Salt Throne through bravado and blood, more interested in chaos and conquest than the family he stole it from.',
    image: '/photos/Euron_Greyjoy.webp',
  },
  {
  name: 'Balon Greyjoy',
  house: 'Greyjoy',
  title: 'Lord of the Iron Islands',
  accent: '#5b6770',
  quote: '"We do not sow."',
  bio: 'Lord Reaper of Pyke and father of Theon and Yara, Balon dreams of restoring the Iron Islands to their former glory. His repeated rebellions against the Iron Throne ultimately leave his house vulnerable to betrayal from within.',
  image: '/photos/Balon_Greyjoy.webp',
  },

  // ───────────── HOUSE MARTELL ─────────────
  {
    name: 'Oberyn Martell',
    house: 'Martell',
    title: 'The Red Viper of Dorne',
    accent: '#e07b39',
    quote: '"Dorne remembers."',
    bio: 'A prince of Dorne with a poet\'s tongue and a duelist\'s blade, come to King\'s Landing to avenge his sister — and to remind the capital that Dorne never forgets an old wrong.',
    image: '/photos/Oberyn_Martell.webp',
  },
  {
    name: 'Ellaria Sand',
    house: 'Martell',
    title: 'Paramour of Dorne',
    accent: '#e07b39',
    quote: '"Dorne remembers."',
    bio: 'Oberyn\'s lover and the mother of his daughters, Ellaria turns her grief over his death into a campaign against every Lannister she can reach.',
    image: '/photos/Ellaria_Sand.webp',
  },
  {
  name: 'Doran Martell',
  house: 'Martell',
  title: 'Prince of Dorne',
  accent: '#e07b39',
  quote: '"Justice. Vengeance. Fire and blood."',
  bio: 'The cautious ruler of Dorne, Doran Martell patiently waits for the right moment to avenge the deaths of his sister Elia and her children, believing that patience can achieve what rage cannot.',
  image: '/photos/Doran_Martell.jpg',
  },
  {
  name: 'Trystane Martell',
  house: 'Martell',
  title: 'Prince of Dorne',
  accent: '#e07b39',
  quote: '"I only wished for peace."',
  bio: 'The gentle son of Doran Martell, Trystane becomes betrothed to Myrcella Baratheon in an attempt to strengthen ties between Dorne and the Iron Throne, only to be caught in the violence surrounding his family.',
  image: '/photos/Trystane_Martell.jpg',
  },

  // ───────────── HOUSE BOLTON ─────────────
  {
    name: 'Ramsay Bolton',
    house: 'Bolton',
    title: 'Lord of the Dreadfort',
    accent: '#8b2c2c',
    quote: '"If you think this has a happy ending, you haven\'t been paying attention."',
    bio: 'Roose Bolton\'s bastard-turned-heir, whose cruelty is a game he plays for pleasure. He takes Winterfell by force and rules it through fear alone.',
    image: '/photos/Ramsay_Bolton.webp',
  },
  {
    name: 'Roose Bolton',
    house: 'Bolton',
    title: 'Warden of the North',
    accent: '#8b2c2c',
    quote: '"The Lannisters send their regards."',
    bio: 'Cold and calculating, Roose betrays his king at the Red Wedding to seize the North for his own house — a prize his son will not let him keep for long.',
    image: '/photos/Roose_Bolton.webp',
  },
  //───────────── House Arryn ─────────────
  {
  name: 'Jon Arryn',
  house: 'Arryn',
  title: 'Lord of the Eyrie',
  accent: '#6fa8dc',
  quote: '"The seed is strong."',
  bio: 'Lord of the Eyrie and Hand of King Robert Baratheon, Jon Arryn uncovers the truth behind the royal children\'s parentage. His mysterious death sets the events of the War of the Five Kings in motion.',
  image: '/photos/Jon Arryn.jpg',
  },
  {
  name: 'Lysa Arryn',
  house: 'Arryn',
  title: 'Lady of the Eyrie',
  accent: '#6fa8dc',
  quote: '"No one can protect my son but me."',
  bio: 'Born a Tully and widowed after Jon Arryn\'s death, Lysa retreats to the Eyrie with her son Robin. Driven by fear and obsession, her choices further deepen the chaos consuming Westeros.',
  image: '/photos/Lysa_Arryn.webp',
  },
  {
  name: 'Robin Arryn',
  house: 'Arryn',
  title: 'Lord of the Eyrie',
  accent: '#6fa8dc',
  quote: '"Make the bad man fly!"',
  bio: 'The sickly young Lord of the Vale, Robin Arryn is raised in isolation under the overprotective care of his mother. Though fragile as a child, he ultimately survives the wars that consume the realm.',
  image: '/photos/Robin_Arryn.jpg',
  },
  // ─────────────House Tully ─────────────
  {
  name: 'Hoster Tully',
  house: 'Tully',
  title: 'Lord of Riverrun',
  accent: '#1f78b4',
  quote: '"Family. Duty. Honor."',
  bio: 'Lord of Riverrun and father of Catelyn, Lysa, and Edmure, Hoster Tully spent his final years watching the realm descend into war as the family he built became divided by conflicting loyalties.',
  image: '/photos/Hoster_Tully.jpg',
  },
  {
  name: 'Edmure Tully',
  house: 'Tully',
  title: 'Lord of Riverrun',
  accent: '#1f78b4',
  quote: '"I have always done my duty."',
  bio: 'Brother to Catelyn Stark and heir to Riverrun, Edmure is a decent and compassionate lord whose good intentions are often overshadowed by the brutal politics of war.',
  image: '/photos/Edmure_Tully.jpg',
  },
  {
  name: 'Brynden Tully',
  house: 'Tully',
  title: 'The Blackfish',
  accent: '#1f78b4',
  quote: 'I have spent my life taking orders from fools.',
  bio: 'Known throughout Westeros as the Blackfish, Brynden Tully is one of the realm\'s finest soldiers. Fiercely loyal to his family, he chooses to die defending Riverrun rather than surrender.',
  image: '/photos/Brynden Tully.jpg',
  },
  // ───────────── House Tarly ─────────────

  {
  name: 'Randyll Tarly',
  house: 'Tarly',
  title: 'Lord of Horn Hill',
  accent: '#3d8b5a',
  quote: '"No son of House Tarly will ever wear a chain."',
  bio: 'The stern Lord of Horn Hill and one of Westeros\' finest military commanders. Randyll values strength above all else, disowning his eldest son Samwell in favor of his younger heir, Dickon.',
  image: '/photos/Randyll_Tarly.webp',
  },
  {
  name: 'Dickon Tarly',
  house: 'Tarly',
  title: 'Heir to Horn Hill',
  accent: '#3d8b5a',
  quote: '"My father taught me to stand by my family."',
  bio: 'The younger son of Randyll Tarly, Dickon is groomed to inherit Horn Hill after Samwell joins the Night\'s Watch. Loyal to his father, he ultimately chooses honor over survival and dies beside him facing Daenerys Targaryen.',
  image: '/photos/Dickon_Tarly.jpg',
  },

  // ───────────── OTHERS ─────────────
  {
  name: 'Night King',
  house: 'Others',
  title: 'Leader of the White Walkers',
  accent: '#9a9a9a',
  quote: '"..."',
  bio: 'The ancient leader of the White Walkers, the Night King commands the Army of the Dead and marches south to bring the endless night upon the living.',
  image: '/photos/Night_King.webp',
  },
  {
    name: 'Tormund Giantsbane',
    house: 'Others',
    title: 'Wildling Raider',
    accent: '#9a9a9a',
    quote: '"Give me ten more like her and I\'d conquer the world."',
    bio: 'A loud, fearless wildling general who becomes one of Jon Snow\'s most loyal allies once the Free Folk and the Night\'s Watch put aside their old war for a newer one.',
    image: '/photos/Tormund_Giantsbane.webp',
  },
  {
    name: 'Brienne of Tarth',
    house: 'Others',
    title: 'Knight of the Seven Kingdoms',
    accent: '#9a9a9a',
    quote: '"I don\'t wear dresses if I can help it."',
    bio: 'A warrior dismissed for her size and looks by nearly everyone she meets, Brienne holds herself to a code of honour stricter than any knight she serves.',
    image: '/photos/Brienne_of_Tarth.webp',
  },
  {
    name: 'Varys',
    house: 'Others',
    title: 'Master of Whisperers',
    accent: '#9a9a9a',
    quote: '"Power resides where men believe it resides."',
    bio: 'A eunuch spymaster with informants in every corner of two continents, Varys claims to serve the realm itself rather than any single ruler — a loyalty that makes him impossible to trust or dismiss.',
    image: '/photos/Varys.webp',
  },
  {
    name: 'Petyr Baelish',
    house: 'Others',
    title: 'Lord Protector of the Vale',
    accent: '#9a9a9a',
    quote: '"Chaos isn\'t a pit. Chaos is a ladder."',
    bio: 'Known as Littlefinger, he rose from a minor lordling to a master manipulator, quietly engineering wars and marriages alike to climb higher than anyone expects.',
    image: '/photos/Petyr_Baelish.webp',
  },
  {
    name: 'Davos Seaworth',
    house: 'Others',
    title: 'Hand of the King',
    accent: '#9a9a9a',
    quote: '"The realm. Do you know who says that? Kings."',
    bio: 'A former smuggler knighted for his service, Davos is the quiet conscience beside every king he serves, valuing plain honesty over grand ambition.',
    image: '/photos/Davos_Seaworth.webp',
  },
  {
    name: 'Melisandre',
    house: 'Others',
    title: 'The Red Woman',
    accent: '#9a9a9a',
    quote: '"The night is dark and full of terrors."',
    bio: 'A priestess of the Lord of Light whose visions guide — and mislead — the kings she serves, wielding a faith powerful enough to raise the dead.',
    image: '/photos/Melisandre.webp',
  },
  {
    name: 'Samwell Tarly',
    house: 'Others',
    title: 'Maester of the Night\'s Watch',
    accent: '#9a9a9a',
    quote: '"I\'m a coward. Mother always said so."',
    bio: 'A gentle, bookish son disowned by his own father, Sam finds courage he never knew he had at the Wall, and knowledge that may be the key to defeating the dead.',
    image: '/photos/Samwell_Tarly.webp',
  },
  {
    name: 'Bronn',
    house: 'Others',
    title: 'Sellsword of the Blackwater',
    accent: '#9a9a9a',
    quote: '"I\'m not going to fight you for free."',
    bio: 'A sellsword with no house and fewer scruples, Bronn fights for whoever pays best — and somehow ends up one of the more honest men in King\'s Landing.',
    image: '/photos/Bronn.webp',
  },
  {
    name: 'Missandei',
    house: 'Others',
    title: 'Advisor to the Queen',
    accent: '#9a9a9a',
    quote: '"All men must die. But we are not men."',
    bio: 'Freed from slavery by Daenerys, Missandei becomes one of her closest and most trusted advisors, translating not just languages but the Queen\'s cause itself.',
    image: '/photos/Missandei.webp',
  },
  {
    name: 'Grey Worm',
    house: 'Others',
    title: 'Commander of the Unsullied',
    accent: '#9a9a9a',
    quote: '"Today, we will break their chains."',
    bio: 'Once an enslaved soldier stripped of his name, Grey Worm leads the Unsullied with unwavering discipline and a loyalty to Daenerys that runs deeper than any command.',
    image: '/photos/Grey_Worm.webp',
  },
  {
  name: 'Jorah Mormont',
  house: 'Others',
  title: 'Knight of Bear Island',
  accent: '#9a9a9a',
  quote: '"I will always protect you, Khaleesi."',
  bio: 'An exiled knight from Bear Island, Jorah devotes his life to Daenerys Targaryen, serving as her loyal advisor and protector while seeking redemption for his past mistakes.',
  image: '/photos/Jorah_Mormont.jpg',
  },
  {
  name: 'Khal Drogo',
  house: 'Others',
  title: 'Khal of the Great Grass Sea',
  accent: '#9a9a9a',
  quote: '"I will take my khalasar west to where the world ends."',
  bio: 'The powerful leader of the Dothraki, Khal Drogo marries Daenerys Targaryen and becomes the first person to believe in her destiny to reclaim the Iron Throne.',
  image: '/photos/Khal_Drogo.jpg',
  },
  {
  name: 'Hodor',
  house: 'Others',
  title: 'Protector of Bran Stark',
  accent: '#9a9a9a',
  quote: '"Hodor."',
  bio: 'A gentle giant whose vocabulary is reduced to a single word, Hodor ultimately reveals one of the most heartbreaking stories in Westeros by sacrificing himself to save Bran Stark.',
  image: '/photos/Hodor.jpg',
  },
  {
  name: 'Ygritte',
  house: 'Others',
  title: 'Wildling Spearwife',
  accent: '#9a9a9a',
  quote: '"You know nothing, Jon Snow."',
  bio: 'A fierce Free Folk warrior, Ygritte falls in love with Jon Snow despite the war between their peoples, leaving behind one of the saga\'s most unforgettable romances.',
  image: '/photos/Ygritte.jpg',
  },
  {
  name: 'Gilly',
  house: 'Others',
  title: 'Free Folk Survivor',
  accent: '#9a9a9a',
  quote: '"Sam saved me."',
  bio: 'Escaping the horrors of Craster\'s Keep, Gilly finds safety alongside Samwell Tarly and becomes part of the family he never believed he deserved.',
  image: '/photos/Gilly.jpg',
  },
  {
  name: 'Sandor Clegane',
  house: 'Others',
  title: 'The Hound',
  accent: '#9a9a9a',
  quote: '"Fuck the King."',
  bio: 'Known as the Hound, Sandor Clegane serves the Lannisters before abandoning their cause. Beneath his fearsome reputation lies a man haunted by childhood scars and searching for redemption.',
  image: '/photos/Sandor_Clegane.jpg',
  },
  {
  name: 'Gregor Clegane',
  house: 'Others',
  title: 'The Mountain',
  accent: '#9a9a9a',
  quote: '"..."',
  bio: 'A monstrous knight in the service of House Lannister, Gregor Clegane is feared throughout Westeros for his unmatched brutality, becoming an almost unstoppable weapon after his resurrection.',
  image: '/photos/Gregor_Clegane.webp',
  },
  {
  name: 'Podrick Payne',
  house: 'Others',
  title: 'Squire of Brienne',
  accent: '#9a9a9a',
  quote: '"I\'m trying to become a knight."',
  bio: 'Once Tyrion Lannister\'s loyal squire, Podrick grows into a capable warrior under Brienne of Tarth, proving courage and loyalty matter more than noble birth.',
  image: '/photos/Podrick_Payne.jpg',
  },
  {
  name: 'Grand Maester Pycelle',
  house: 'Others',
  title: 'Grand Maester',
  accent: '#9a9a9a',
  quote: '"Wisdom serves the realm."',
  bio: 'A longtime advisor to the Iron Throne, Pycelle survives several kings through political convenience, quietly serving House Lannister until Varys finally removes him from the game.',
  image: '/photos/Pycelle.jpg',
  },
  {
  name: 'Qyburn',
  house: 'Others',
  title: 'Hand of the Queen',
  accent: '#9a9a9a',
  quote: '"There are always lessons to be learned."',
  bio: 'Expelled from the Citadel for forbidden experiments, Qyburn becomes Cersei Lannister\'s most trusted advisor and creator of Ser Gregor Clegane\'s terrifying new form.',
  image: '/photos/Qyburn.jpg',
  },
  {
  name: 'The High Sparrow',
  house: 'Others',
  title: 'High Septon',
  accent: '#9a9a9a',
  quote: '"We are all equal before the gods."',
  bio: 'Leader of the Faith Militant, the High Sparrow rises from humble origins to challenge the nobility of Westeros, bringing even queens to their knees.',
  image: '/photos/High_Sparrow.webp',
  },
  {
  name: 'Daario Naharis',
  house: 'Others',
  title: 'Captain of the Second Sons',
  accent: '#9a9a9a',
  quote: '"A sword with a sharp edge is a beautiful thing."',
  bio: 'A charismatic sellsword captain, Daario Naharis abandons his mercenary company to fight for Daenerys, becoming both one of her fiercest commanders and her lover.',
  image: '/photos/Daario_Naharis.webp',
  },
  {
  name: 'Jaqen H\'ghar',
  house: 'Others',
  title: 'Faceless Man',
  accent: '#9a9a9a',
  quote: '"A girl has many gifts."',
  bio: 'A mysterious assassin of the Faceless Men, Jaqen H\'ghar guides Arya Stark along the path toward becoming "No One," teaching her the deadly art of changing faces.',
  image: '/photos/Jaqen_Hghar.jpg',
  },
  {
  name: 'Walder Frey',
  house: 'Others',
  title: 'Lord of the Crossing',
  accent: '#9a9a9a',
  quote: '"The Late Lord Frey always pays his debts."',
  bio: 'Lord of the Twins, Walder Frey betrays House Stark during the infamous Red Wedding, forever staining his name as one of Westeros\' greatest traitors.',
  image: '/photos/Walder_Frey.webp',
  },
  
  
]

// House sigil glyphs, used as the small mark on each card and as the
// oversized background watermark.
const HOUSE_SIGILS = {
  Stark: '🐺',
  Lannister: '🦁',
  Targaryen: '🐉',
  Baratheon: '🦌',
  Tyrell: '🌹',
  Greyjoy: '🐙',
  Martell: '☀',
  Bolton: '🗡',
  Arryn: '🦅',
  Tully: '🐟',
  Tarly: '🏹',
  Others: '✦',
}

// Filter bar config: house name + the accent color used to tint that
// filter pill when active/hovered. 'All' has no house-specific accent.
const FILTERS = [
  { name: 'All', accent: null },
  { name: 'Stark', accent: '#8fafc4' },
  { name: 'Lannister', accent: '#d4a84b' },
  { name: 'Targaryen', accent: '#c0392b' },
  { name: 'Baratheon', accent: '#c9962c' },
  { name: 'Tyrell', accent: '#6b9b46' },
  { name: 'Greyjoy', accent: '#5b6770' },
  { name: 'Martell', accent: '#e07b39' },
  { name: 'Bolton', accent: '#8b2c2c' },
  { name: 'Arryn', accent: '#6fa8dc' },
  { name: 'Tully', accent: '#1f78b4' },
  { name: 'Tarly', accent: '#3d8b5a' },
  { name: 'Others', accent: '#9a9a9a' },
]

// Meta fields shown in the strip between the title and the quote.
// Add a key here (and matching data on each character, e.g. `status: 'Deceased'`)
// once you send over the extra details you want displayed — this list controls
// what shows up and in what order, and a field is simply skipped if a
// character doesn't have it.
const META_FIELDS = [
  { key: 'status', label: 'Status' },
  { key: 'allegiance', label: 'Allegiance' },
  { key: 'origin', label: 'Origin' },
]

const CharacterPortrait = ({ src, name, accent }) => {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="char-card-portrait char-card-portrait-fallback" style={{ '--accent': accent }}>
        <span>{name.charAt(0)}</span>
      </div>
    )
  }

  return (
    <div className="char-card-portrait">
      <img src={src} alt={name} onError={() => setFailed(true)} />
    </div>
  )
}

const CharactersPage = () => {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? CHARACTERS : CHARACTERS.filter(c => c.house === filter)),
    [filter]
  )

  const houseCounts = useMemo(() => {
    const counts = {}
    CHARACTERS.forEach(c => {
      counts[c.house] = (counts[c.house] || 0) + 1
    })
    return counts
  }, [])

  const houseTotal = Object.keys(houseCounts).length

  return (
    <PageShell
      eyebrow="Players of the Game"
      title="Characters"
      subtitle="Lords, ladies, exiles and bastards — the souls whose choices decide the fate of the Seven Kingdoms."
      sigil="♜"
    >
      <p className="char-stats">{CHARACTERS.length} characters across {houseTotal} houses</p>

      <div className="char-filters">
        {FILTERS.map(f => (
          <button
            key={f.name}
            className={`char-filter-btn ${filter === f.name ? 'active' : ''}`}
            style={f.accent ? { '--accent': f.accent } : undefined}
            onClick={() => setFilter(f.name)}
          >
            {f.name}
            <span className="char-filter-count">
              {f.name === 'All' ? CHARACTERS.length : houseCounts[f.name] || 0}
            </span>
          </button>
        ))}
      </div>

      <div className="char-grid">
        {visible.map((c, i) => {
          const meta = META_FIELDS.filter(f => c[f.key])
          const sigil = HOUSE_SIGILS[c.house] || '✦'
          return (
            <article
              className={`char-card ${i % 2 === 1 ? 'reverse' : ''}`}
              key={c.name}
              data-sigil={sigil}
              style={{ '--accent': c.accent, '--i': Math.min(i, 10) }}
            >
              <CharacterPortrait src={c.image} name={c.name} accent={c.accent} />
              <div className="char-card-details">
                <div className="char-card-top">
                  <span className="char-card-house">{c.house}</span>
                  <span className="char-card-glyph">{sigil}</span>
                </div>
                <h2 className="char-card-name">{c.name}</h2>
                <p className="char-card-title">{c.title}</p>

                {meta.length > 0 && (
                  <div className="char-card-meta">
                    {meta.map(f => (
                      <div className="char-card-meta-item" key={f.key}>
                        <span className="char-card-meta-label">{f.label}</span>
                        <span className="char-card-meta-value">{c[f.key]}</span>
                      </div>
                    ))}
                  </div>
                )}

                <p className="char-card-quote">{c.quote}</p>
                <p className="char-card-bio">{c.bio}</p>
              </div>
            </article>
          )
        })}
      </div>
    </PageShell>
  )
}

export default CharactersPage