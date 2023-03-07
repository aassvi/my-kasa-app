/**
 * Fonction Tag retourne une affichage d'élements div tag 
 * utilise le hook useParams pour extraire l'ID du logement dans URL
 * recherche l'objet de données tag correspondant à l'ID fourni dans le fichier data 
 * utilise une boucle map pour itérer sur le tableau de tags et
 *  créer un élément div pour chaque tag avec une class pour le scss
 * les clés d'élément sont utilisées pour identifier chaque élément dans la liste de tags
 *  et éviter les avertissements de clés en double.
 */
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
