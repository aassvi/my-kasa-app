import React  from 'react';
import { useParams} from 'react-router-dom';
import Carousel from './Carousel';
import Header from './Header';
import HostRate from './HostRate';
import { data } from './data';
import Error from './Error';
import Collapsable from './CollapseLogement';
import Tag from './Tag';
import Footer from './Footer';


function Logement() { 
  const { id } = useParams();


  
  const appart = data.find(p=>p.id === id)
    if(!appart){
        return <Error/>
    }

     return (
               
               <>
               <Header />
               <div className="kasa-logement">
                    <div className="kasa-logement-body">
                         <div className="kasa-logement-body-carousel">
                         <Carousel />
                         </div>
                         <HostRate />
                         <div className="kasa-logement-body-content">
                              <Tag/>                              
                              <Collapsable/>
                         </div>
                    </div>
               </div>
               <Footer/>
               </>
     );
}

export default Logement;

/*
import React from 'react';
import Carousel from './Carousel';
import Header from './Header';
import HostRate from './HostRate';

//import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Logement() {
     const { id } = useParams();
     const navigate = useNavigate();
     if (!id) {
          navigate('/*');
          return;
    
     } else{
  
     
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
