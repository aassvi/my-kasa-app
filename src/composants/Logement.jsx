import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import HostRate from './HostRate';

function Logement() {
  return (
    <>
          <Header/>
          
          <div className='kasa-logement'>

               <div className='kasa-logement-body'>
                    
                    <div className='kasa-logement-body-carousel'>
                    <Carousel/>
                    </div>
                 
                    <HostRate/>
                                
                    <div className='kasa-logement-body-content'>
                         <div className='kasa-logement-body-content-tag'>
                              <div className='rectangle3'>
                                   <p> importer tags fichier data composant tag</p>
                              </div>
                         </div>
                         <div className='kasa-logement-body-content-dropdowopen'>
                              <div className='rectangle4close rectangle4open'>
                                   <h3> importer description fichier data composant </h3>
                                   <h4> importer equipements fichier data composant</h4>
                              </div>     
                         </div>
                    </div>  
               </div>
          </div>
     </>
  );
}

export default Logement;


/*import React from 'react';
import Header from './Header';

//import Carousel from './Carousel';

import {useParams} from 'react-router-dom';

function Logement(){
     const { id } = useParams();
     return (
          <>
               <Header/>
               <div className='kasa-logement'>
        
                    <div className='kasa-logement-body'>
                         <div className='kasa-logement-body-host'></div>
                         <div className='kasa-logement-body-rate'></div>
                         <div className='kasa-logement-body-carousel'>
                              <h1>carousel titre data </h1>
                              <p> lieu</p>
                              
                         </div>

                         <h2> Alexandre Dumas </h2>
                         <div className='kasa-logement-body-content'>
                              <div className='kasa-logement-body-content-tag'>
                                   <div className='rectangle3'>
                                        <p> importer tags fichier data composant tag</p>
                                   </div>
                              </div>
                              <div className='kasa-logement-body-content-dropdowopen'>
                                   <div className='rectangle4close rectangle4open'>
                                        <h3> importer description fichier data composant </h3>
                                        <h4> importer equipements fichier data composant</h4>
                                   </div>     
                              </div>
                         </div>  
                    </div>
               </div>
          </>
     )
}

export default Logement;
*/
