import React from 'react';
import {Link } from 'react-router-dom';


export default function Navbar (){

     return(

     <nav className='kasa-nav' >    
          <Link to="/" >Accueil</Link>
          <Link to="/Apropos">A propos</Link>
     </nav>
)
}


