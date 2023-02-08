import React from 'react';
import paysage from '../assets/paysage.png';
import Thumb from './Thumb';
import Header from './Header';



function Home(){
     return (
          <>
          <Header/>
          <div className='kasa-home'>  
               <div className='kasa-home-body'>  
                    <div className='kasa-home-body-section1'>  
                         <h1>Chez vous,partout et ailleurs</h1>
                         <img src={paysage} className= 'sectionimage'alt="paysage" />    
                     </div>
                    <div className='kasa-home-section-gallery'>
                     <Thumb/>
                    </div>                 
               </div>
          </div>
          </>
         
     )
}

export default Home;
