import { useState } from 'react'
import { useNavigate } from 'react-router'

function Start() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    localStorage.setItem('spielerName', name)
    navigate('/spiel')
  }

  return (
    <section className="main-index">
      <h2>Rogue-like-Memory</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <button type="submit" className="spielen-btn">Spielen</button>
      </form>
    </section>
  )
}

export default Start
