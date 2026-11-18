import type { Karte } from '../types'

type Props = {
  karte: Karte
  onKlick: (id: number) => void
}

function SpielKarte({ karte, onKlick }: Props) {
  const sichtbar = karte.status !== 'verdeckt'

  return (
    <button
      type="button"
      className={sichtbar ? 'karte aufgedeckt' : 'karte'}
      onClick={() => onKlick(karte.id)}
    >
      {sichtbar ? karte.symbol : ''}
    </button>
  )
}

export default SpielKarte
