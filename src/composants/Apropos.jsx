import React from 'react';
import Collapsable from './Collapse';
import Header from './Header';
import kalen2 from '../assets/kalen2.png';
import gustavo from '../assets/gustavo.png';
import Footer from './Footer';



function Apropos(){
     return (
          <>
          <Header/>
          <div className='kasa-apropos'>
               <div className='kasa-apropos-section1'>  
                    <img src={kalen2} className= 'sectionimagekalen'alt="paysage kalen" />       
                    <img src={gustavo} className= 'sectionimagegustavo'alt="paysage gustavo" />  
               </div>  
               <Collapsable/>
          </div>
          <Footer/>
         
          </>
     )
}

export default Apropos;
