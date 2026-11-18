function Spiel() {

    const spielername = localStorage.getItem('spielerName') ?? 'unbekannt'
    return(
        <>
            <h2>spiel</h2>
            <p>spieler: {spielername}</p>
        </>
    ) 

}

export default Spiel