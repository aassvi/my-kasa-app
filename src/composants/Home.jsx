import React from 'react';
import paysage2 from '../assets/paysage2.png';
import paysagemobile from '../assets/paysagemobile.png';
import Thumb from './Thumb';
import Header from './Header';
import Footer from './Footer';
import { data } from '../services/data';



function Home(){
     return (
          <>
          <Header/>
          <div className='kasa-home'>  
               <div className='kasa-home_body'>  
                    <div className='kasa-home-body_section1'>  
                         <div className='kasa-home-body-section1_desk'>
                              <h1>Chez vous, partout et ailleurs</h1>
                              <img src={paysage2} alt="paysage" />  
                         </div>
                        
                         <div className='kasa-home-body-section1_mobile'>
                              <h1>Chez vous,<br></br>partout et ailleurs</h1>
                              <img src={paysagemobile} className= 'sectionimage'alt="paysage" />  
                         </div>
                         
                     </div>
                    <div className='kasa-home-body_gallery'>
                     <Thumb data={data}/>
                    </div>                 
               </div>
               
          </div>
          <Footer/>
          </>
         
     )
}

export default Home;
