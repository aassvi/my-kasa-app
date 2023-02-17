import React from 'react';
import logo2 from '../assets/logo2.png';


   
function Footer(props){
     const { footerTop} = props;
     const style = {
     marginTop: footerTop
     }
     return (
          <>
           <div style={style}>
               <div className='kasa-footer ' >
                    <div className='kasa-footer-elements'>
                         <img src={logo2} className="App-logo" alt="logo" />
                         <p>© 2020 Kasa. All rights reserved</p>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Footer;