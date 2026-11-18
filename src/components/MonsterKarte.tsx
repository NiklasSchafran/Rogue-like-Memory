import { Link } from 'react-router'
import type { Monster } from '../types'

type Props = {
  monster: Monster
}

function MonsterKarte({ monster }: Props) {
  if (!monster.freigeschaltet) {
    return (
      <div className="monster-karte gesperrt">
        <span className="monster-bild">?</span>
        <span className="monster-name">???</span>
      </div>
    )
  }

  return (
    <Link className="monster-karte" to={`/sammlung/${monster.id}`}>
      <span className="monster-bild">{monster.bild}</span>
      <span className="monster-name">{monster.name}</span>
    </Link>
  )
}

export default MonsterKarte
