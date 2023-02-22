import React from 'react';
import paysage2 from '../assets/paysage2.png';
import paysagemobile from '../assets/paysagemobile.png';
import Thumb from './Thumb';
import Header from './Header';
import Footer from './Footer';



function Home(){
     return (
          <>
          <Header/>
          <div className='kasa-home'>  
               <div className='kasa-home_body'>  
                    <div className='kasa-home-body_section1'>  
                         <div className='kasa-home-body-section1_desk'>
                              <h1>Chez vous, partout et ailleurs</h1>
                         </div>
                         <img src={paysage2} alt="paysage" />    
                         <img src={paysagemobile} className= 'sectionimage'alt="paysage" />  
                         <div className='kasa-home-body-section1_mobile'>
                              <h1>Chez vous,<br></br>partout et ailleurs</h1>
                         </div>
                         <img src={paysage2} alt="paysage" />    
                         <img src={paysagemobile} className= 'sectionimage'alt="paysage" />  
                     </div>
                    <div className='kasa-home-body_gallery'>
                     <Thumb/>
                    </div>                 
               </div>
               
          </div>
          <Footer/>
          </>
         
     )
}

export default Home;
