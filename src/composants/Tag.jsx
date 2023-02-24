import React from 'react';
import { useParams } from 'react-router-dom';

import { data } from '../services/data';

function Tag() {
     const { id } = useParams();
     const currentData = data.find((item) => item.id === id);


     return (
          <>
          <div className='logement-container'>
               {currentData.tags.map((tag, index) => (
                         
                         <div className={`logement-rectangle3${index + 1}`} key={index}>
                              <div className='logement-rectangle3-texte'>
                              <p key={index}>{tag}</p>
                              </div>
                         </div>
                 
                    
               ))}
          </div>
          </>

     );
};
     
export default Tag;
