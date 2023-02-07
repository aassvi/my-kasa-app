import React from 'react';
import { useParams } from 'react-router-dom';

import { data } from './data';
import etoile from '../assets/etoile.png';

function HostRate() {
  const { id } = useParams();
  const infoshostrate = data.find(item => item.id === id);
  const { rating } = infoshostrate;

  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={etoile} alt="star" key={i} />);
  }

  return (
    <div className=" HostRate-rate">
     <div className=" HostRate-rate-etoile">
     {stars}
     </div>
 
    </div>
  );
}

export default HostRate;