import { Link } from 'react-router-dom'
 
function Header() {
    return (
          <div className='kasa-header'>
          <nav className='kasa-header-nav'>
               <Link name="Accueil" to="/" >Accueil</Link>
               <Link name="Apropos" to="/Apropos">A propos</Link>
          </nav>
        </div>
    )
}

export default Header