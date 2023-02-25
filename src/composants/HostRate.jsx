import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../services/data';
import etoile from '../assets/etoile.png';
import etoilegrise from '../assets/etoilegrise.png';


function HostRate() {
  const { id } = useParams();
  const infoshostrate = data.find(item => item.id === id);
  const { rating, host } = infoshostrate;
  console.log(host.name);
  const maxrating =5;  
  const  grey = maxrating - rating ;
  console.log(grey);

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