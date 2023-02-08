import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logom from '../assets/logom.png';

 
function Header() {
    return (
        <div className='kasa-header'>
            <div className='kasa-header-logo'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='kasa-header-logomobile'>
            <img src={logom} className="App-logomobile" alt="logo mobile" />
            </div>
            <div className='kasa-header-nav'>
            <nav>
               <Link className="Accueil" to="/" >Accueil</Link>
               <Link className="Apropos" to="/Apropos">A propos</Link>
            </nav>
            </div>
        </div>
    )
}

export default Header