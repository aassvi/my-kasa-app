/** On importe les modules nécessaires images et données du fichier dataCollapse tableau javaScript
*  fonction Apropos retourne le contenu de la page à afficher. Elle affiche une image et 
*  boucle à travers les données et génère un element collapse pour chaque entrée du tableau 
*  On exporte le composant pour pouvoir l'utiliser ailleurs dans l'application
*/
import React from 'react';
import Collapse from './Collapse'; 
import kalen2 from '../assets/kalen2.png'; 
import gustavo from '../assets/gustavo.png'; 
import { dataCollapse  } from '../services/dataCollapse'; 

function Apropos(){
     
     return (
          <>
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
          </>
     )
}

export default Apropos;


