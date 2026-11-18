import { useState } from 'react'
import SpielKarte from '../components/SpielKarte'
import type { Karte } from '../types'

const SYMBOLE = ['🍎', '🍌', '🍇', '🍒', '🥝', '🍔', '🍕', '🍦']

function mischen<T>(array: T[]): T[] {
  const kopie = [...array]
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[kopie[i], kopie[j]] = [kopie[j], kopie[i]]
  }
  return kopie
}

function neueKarten(): Karte[] {
  return mischen([...SYMBOLE, ...SYMBOLE]).map((symbol, index) => ({
    id: index,
    symbol,
    status: 'verdeckt',
  }))
}

function Spiel() {
  const spielername = localStorage.getItem('spielerName') ?? 'Unbekannt'
  const [karten, setKarten] = useState<Karte[]>(neueKarten)
  const [leben, setLeben] = useState(8)

  const offene = karten.filter((k) => k.status === 'offen')
  const gewonnen = karten.every((k) => k.status === 'gefunden')
  const verloren = leben === 0

  function aufdecken(id: number) {
    const karte = karten.find((k) => k.id === id)
    if (!karte || karte.status !== 'verdeckt') return
    if (offene.length === 2 || gewonnen || verloren) return

    const neu = karten.map((k) => (k.id === id ? { ...k, status: 'offen' as const } : k))
    setKarten(neu)

    const jetztOffen = neu.filter((k) => k.status === 'offen')
    if (jetztOffen.length < 2) return

    if (jetztOffen[0].symbol === jetztOffen[1].symbol) {
      setKarten(neu.map((k) => (k.status === 'offen' ? { ...k, status: 'gefunden' as const } : k)))
    } else {
      setTimeout(() => {
        setKarten((vorher) =>
          vorher.map((k) => (k.status === 'offen' ? { ...k, status: 'verdeckt' as const } : k)),
        )
        setLeben((vorher) => vorher - 1)
      }, 1000)
    }
  }

  function neustart() {
    setKarten(neueKarten())
    setLeben(8)
  }

  return (
    <>
      <section className="status">
        <p>{spielername}</p>
        <p>{'❤️'.repeat(leben)}</p>
      </section>

      {(gewonnen || verloren) && (
        <section className="spiel-ende">
          <p>{gewonnen ? 'Gewonnen! 🎉' : 'Game Over 💀'}</p>
          <button type="button" className="spielen-btn" onClick={neustart}>Neues Spiel</button>
        </section>
      )}

      <section className="Memoryfeld">
        {karten.map((karte) => (
          <SpielKarte key={karte.id} karte={karte} onKlick={aufdecken} />
        ))}
      </section>
    </>
  )
}

export default Spiel
