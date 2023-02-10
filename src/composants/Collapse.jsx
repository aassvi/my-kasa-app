import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Collapsable = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="apropos-collapsable">
      <div className='RectangleTitre' onClick={() => setIsOpen(!isOpen)}>
        <h3>Respect</h3>
        <KeyboardArrowDownIcon style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </div>
      {isOpen && (
        <div  className='RectangleTexte'>
          <div className='bis'>
          <p >Contenu La bienveillance vient de la map dataCollapse</p>
        </div>
        </div>
      )}
      
    </div>
  );
};

export default Collapsable;

