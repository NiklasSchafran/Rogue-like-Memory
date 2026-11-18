import { NavLink } from 'react-router'

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/spiel">Spielen</NavLink>
        <NavLink to="/sammlung">Sammlung</NavLink>
        <NavLink to="/regeln">Regeln</NavLink>
      </nav>
    </header>
  )
}

export default Header
