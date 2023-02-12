import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { data } from './data';

const Collapsable = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(Array(2).fill(false));
  const currentData = data.find((item) => item.id === id);

  const handleClick = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <>
      <div className='logement-collapsable1'>
        <div className='RectangleTitre' onClick={() => handleClick(0)}>
          <h3>Description</h3>
          <KeyboardArrowDownIcon style={{ transform: isOpen[0] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
        {isOpen[0] && (
          <div className='RectangleTexte'>
            <div className='bis'>
              <p>{currentData.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className='logement-collapsable2'>
        <div className='RectangleTitre' onClick={() => handleClick(1)}>
          <h3>Equipements</h3>
          <KeyboardArrowDownIcon style={{ transform: isOpen[1] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
        {isOpen[1] && (
          <div className='RectangleTexte'>
            <div className='bis'>
              <ul>
                {currentData.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Collapsable;

/*
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { data } from './data';


const Collapsable = () => {
  const [isOpen, setIsOpen] = useState(Array(2).fill(false));

  const handleClick = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <>
      <div className='logement-collapsable1'>
        <div className='RectangleTitre' onClick={() => handleClick(0)}>
          <h3>Description</h3>
          <KeyboardArrowDownIcon style={{ transform: isOpen[0] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
        {isOpen[0] && (
          <div className='RectangleTexte'>
            <div className='bis'>
              <p>{data[0].description}</p>
            </div>
          </div>
        )}
      </div>
      <div className='apropos-collapsable2'>
        <div className='RectangleTitre' onClick={() => handleClick(1)}>
          <h3>Equipements</h3>
          <KeyboardArrowDownIcon style={{ transform: isOpen[1] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
        {isOpen[1] && (
          <div className='RectangleTexte'>
            <div className='bis'>
              <ul>
                {data[0].equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Collapsable;
*/
