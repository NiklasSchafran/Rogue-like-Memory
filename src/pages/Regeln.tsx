function Regeln() {
    return (
        <section className="regeln">
            <h2>Spielregeln</h2>

            <article>
                <h3>Ziel des Spiels</h3>
                <p>Decke alle Kartenpaare auf, bevor dir die Leben ausgehen.</p>
            </article>

            <article>
                <h3>Ablauf</h3>
                <ol>
                    <li>Klicke eine Karte an, um sie aufzudecken.</li>
                    <li>Decke eine zweite Karte auf.</li>
                    <li>Zeigen beide dasselbe Symbol, bleiben sie offen.</li>
                    <li>Sind sie verschieden, werden beide wieder verdeckt.</li>
                </ol>
            </article>

            <article>
                <h3>Leben</h3>
                <p>Jedes falsche Paar kostet ein Leben. Hast du keine Leben mehr, ist der Run vorbei und du startest von vorne.</p>
            </article>

            <article>
                <h3>Level</h3>
                <p>Hast du alle Paare gefunden, geht es ins nächste Level. Mit jedem Level wird das Spielfeld schwieriger.</p>
            </article>
        </section>
    )
}

export default Regeln
