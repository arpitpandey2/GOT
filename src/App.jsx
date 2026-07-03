import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import WorldPage from './pages/WorldPage'
import CharactersPage from './pages/CharactersPage'
import HousesPage from './pages/HousesPage'
import HistoryPage from './pages/HistoryPage'
import JourneyPage from './pages/JourneyPage'
import RealmPage from './pages/RealmPage'

const Home = () => (
  <>
    <Hero />
    <Section1 />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/houses" element={<HousesPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/realm" element={<RealmPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
