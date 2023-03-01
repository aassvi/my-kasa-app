import React from 'react';
import {Link } from 'react-router-dom';




function Error(){
     return (
        <>
        
          <div className='kasa-error'>
               <p className='error'>404</p>   
               <h2 > Oups! La page que vous demandez n'existe pas. </h2>  
               <h3 > Oups! La page que <br></br>vous demandez n'existe pas. </h3>
               <Link to="/" > <p> Retourner sur la page d'accueil</p></Link>
          </div>
         
         </>     
          
     )
}

export default Error;