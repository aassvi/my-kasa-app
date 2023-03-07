/** 
 * Fonction Collapse utilise Hook useState pour gérer l'état de l'ouverture ou de la fermeture du collapse 
 * selon l'interaction de l'utilisateur, elle 
 * définit une composante Collapse qui prend deux props : title et content
 * déclare un état local isOpen à false en utilisant le hook useState
 * définit la fonction handleToggle qui inverse la valeur d'isOpen lorsqu'on clique 
 * retourne l'affichage des eléments collapse en fonction du type de données présents dans les props tableau ou objet
 *  */

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Collapse = ({ title, content }) => {
   const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-wrapper">
        <div className="collapse-header" onClick={handleToggle}>
          <h3>{title}</h3>
          <KeyboardArrowDownIcon className={`collapse-icon ${isOpen ? 'open' : 'closed'}`} />
        </div>
        {isOpen ? (
          <div className="collapse-content">
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ) : (
          <div className="collapse-content-closed">
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;

