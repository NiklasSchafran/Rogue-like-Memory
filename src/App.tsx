import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import Start from './pages/Start'
import Regeln from './pages/Regeln'
import Spiel from './pages/Spiel'
import Sammlung from './pages/Sammlung'
import MonsterDetail from './pages/MonsterDetail'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/regeln" element={<Regeln />} />
          <Route path="/spiel" element={<Spiel />} />
          <Route path="/sammlung" element={<Sammlung />} />
          <Route path="/sammlung/:id" element={<MonsterDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
