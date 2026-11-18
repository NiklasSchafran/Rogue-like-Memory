import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { Monster } from '../types'

function MonsterDetail() {
    const { id } = useParams()
    const [monster, setMonster] = useState<Monster[]>([])

    useEffect(() => {
        async function laden() {
            const antwort = await fetch('/monster.json')
            setMonster(await antwort.json())
        }
        laden()
    }, [])

    const gefunden = monster.find((m) => m.id === id)

    if (!gefunden) {
        return <p>Lädt …</p>
    }

    return (
        <section className="monster-seite">
            <Link className="zurueck" to="/sammlung">← Zurück zur Sammlung</Link>

            <article className="monster-detail">
                <div className="monster-detail-bild">{gefunden.bild}</div>

                <div className="monster-detail-text">
                    <h2>{gefunden.name}</h2>
                    <p className="monster-info">{gefunden.seltenheit} · Fundort: {gefunden.fundort}</p>
                    <p>{gefunden.beschreibung}</p>

                    <h3>Fähigkeit: {gefunden.faehigkeit}</h3>
                    <p>{gefunden.faehigkeitText}</p>
                </div>
            </article>
        </section>
    )
}

export default MonsterDetail
