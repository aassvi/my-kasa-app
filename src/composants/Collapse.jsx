/* Hook useState est utilisé dans ce code pour gérer l'état de l'ouverture ou de la fermeture du collapse selon l'interaction de l'utilisateur*/

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Définit une composante Collapse qui prend deux props : title et content
const Collapse = ({ title, content }) => {
  // Déclare un état local isOpen à false en utilisant le hook useState
  const [isOpen, setIsOpen] = useState(false);
  // Définit la fonction handleToggle qui inverse la valeur d'isOpen lorsqu'on clique 
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

