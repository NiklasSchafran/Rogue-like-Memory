import { useEffect, useState } from 'react'
import MonsterKarte from '../components/MonsterKarte'
import type { Monster } from '../types'

function Sammlung() {
  const [monster, setMonster] = useState<Monster[]>([])

  useEffect(() => {
    async function laden() {
      const antwort = await fetch('/monster.json')
      setMonster(await antwort.json())
    }
    laden()
  }, [])

  const entdeckt = monster.filter((m) => m.freigeschaltet).length

  return (
    <section className="sammlung">
      <h2>Sammlung</h2>
      <p className="sammlung-zaehler">{entdeckt} / {monster.length} entdeckt</p>

      <div className="sammlung-raster">
        {monster.map((m) => (
          <MonsterKarte key={m.id} monster={m} />
        ))}
      </div>
    </section>
  )
}

export default Sammlung
