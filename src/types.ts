export type Monster = {
  id: string
  name: string
  bild: string
  seltenheit: string
  fundort: string
  beschreibung: string
  faehigkeit: string
  faehigkeitText: string
  freigeschaltet: boolean
}

export type Karte = {
  id: number
  symbol: string
  status: 'verdeckt' | 'offen' | 'gefunden'
}
