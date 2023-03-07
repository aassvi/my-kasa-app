/**
 * Fonction HostRate  utilise le hook useParams pour extraire l'ID du logement dans URL
 * recherche l'objet de données rating et host correspondant à l'ID fourni dans le fichier data 
 * le rating est représenté par des étoiles jaunes et grises en fonction du nombre de points de l'hôte. 
 * Le composant utilise une boucle pour créer un tableau d'éléments img à partir des images étoiles et étoiles grises.
 * itere sur le tableau stars pour ecrire les étoiles jaunes et ensuite complète avec des etoiles grises après calcul de difference
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../services/data';
import etoile from '../assets/etoile.png';
import etoilegrise from '../assets/etoilegrise.png';


function HostRate() {
  const { id } = useParams();
  const infoshostrate = data.find(item => item.id === id);
  const { rating, host } = infoshostrate;
 
  const maxrating =5;  
  const  grey = maxrating - rating ;
 
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={etoile} alt="star" key={i} />);
  }
  // prop clé unique j+rating
  if (grey > 0){
     for (let j = 0; j < grey; j++) {
          stars.push(<img src={etoilegrise} alt="stargrey" key={j+rating} />);
     }  
   }
  
  return (
     <>   
 
          <div className=" HostRate-rate">
               <div className=" HostRate-rate-etoile">
                    {stars}
               </div>
          </div>
          <div className='HostRate-host'>
               <div className=" HostRate-host-name">
                    {host.name}
               </div>
               <div className=" HostRate-host-picture">
                    
                    <img src= {host.picture}alt= {host.picture} />
               
               </div>
          </div>
     
     </>
  );
}

export default HostRate;