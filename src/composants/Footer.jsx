import React from 'react';
import logo2 from '../assets/logo2.png';

   
function Footer(){
     return (
          <>
          <div className='kasa-footer ' >
               <div className='kasa-footer-elements'>
                    <img src={logo2} className="App-logo" alt="logo" />
                    <p>© 2020 Kasa. All rights reserved</p>
               </div>
          </div>
          </>
     )
}

export default Footer;