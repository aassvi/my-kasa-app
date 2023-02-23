import React from 'react';
import Collapse from './Collapse';
import Header from './Header';
import kalen2 from '../assets/kalen2.png';
import gustavo from '../assets/gustavo.png';
import Footer from './Footer';

import { dataCollapse  } from '../services/dataCollapse';



function Apropos(){
    
     return (
          <>
          <Header/>
          <div className='kasa-apropos'>
               <div className='kasa-apropos_section1'>  
                    <img src={kalen2} className= 'sectionimagekalen'alt="paysage kalen" />       
                    <img src={gustavo} className= 'sectionimagegustavo'alt="paysage gustavo" />  
               </div> 
               <div className="kasa-apropos_collapse">   
               {dataCollapse.map((item, index) => (
                    <Collapse key={index} title={item.titre} content={item.texte} className={`collapse-${index}`}/>
                ))}
                     </div>   
          </div>
          <Footer/>
         
          </>
     )
}

export default Apropos;

// <Footer footerTop='15%'/>
