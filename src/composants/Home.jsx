import React from 'react';
import paysage from '../assets/paysage.png';
import Thumb from './Thumb';




function Home(){
     return (
          <div className='kasa-home'>  
           
               <div className='kasa-home-section'>  
                    <h1>Chez vous,partout et ailleurs</h1>
                    <div className='kasa-home-section-mask'>  
                         <img src={paysage} alt="paysage" />    
                    </div>
                    <div className='kasa-home-section-gallery'>
                     <Thumb/>

                    </div>
                                        
               </div>
          </div>
         
     )
}

export default Home;
