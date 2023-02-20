import React from 'react';
//import Collapsable from './Collapse';
import Collapse from './Collapse';
import Header from './Header';
import kalen2 from '../assets/kalen2.png';
import gustavo from '../assets/gustavo.png';
import Footer from './Footer';

import { dataCollapse  } from './dataCollapse';



function Apropos(){
    
     return (
          <>
          <Header/>
          <div className='kasa-apropos'>
               <div className='kasa-apropos-section1'>  
                    <img src={kalen2} className= 'sectionimagekalen'alt="paysage kalen" />       
                    <img src={gustavo} className= 'sectionimagegustavo'alt="paysage gustavo" />  
               </div> 
               <div className="apropos-collapse">   
               {dataCollapse.map((item, index) => (
                    <Collapse key={index} title={item.titre} content={item.texte} className={`collapse-${index}`}/>
                ))}
                     </div>   
          </div>
          <Footer footerTop='15%'/>
         
          </>
     )
}

export default Apropos;
//<Collapse data={dataCollapse}  type="data2" />