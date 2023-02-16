import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Collapse = ({ data, id, type }) => {
  const [isOpen, setIsOpen] = useState([false, false]);

  const filteredData = data.filter((item) => item.id === id);

  if (!filteredData.length) {
    return null;
  }

  const item = filteredData[0];

  const handleClick = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  if (type === 'data1') {
    return (
      <div className="collapsable">
        <div className={`collapsable-item ${isOpen[0] ? 'open' : ''}`}>
          <div className="RectangleTitre" onClick={() => handleClick(0)}>
            <h3>Description</h3>
            <KeyboardArrowDownIcon
              style={{ transform: isOpen[0] ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
          {isOpen[0] && (
            <div className="RectangleTexte">
              {item.description && <p>{item.description}</p>}
            </div>
          )}
        </div>
        <div className={`collapsable-item ${isOpen[1] ? 'open' : ''}`}>
          <div className="RectangleTitre" onClick={() => handleClick(1)}>
            <h3>Equipements</h3>
            <KeyboardArrowDownIcon
              style={{ transform: isOpen[1] ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
          {isOpen[1] && (
            <div className="RectangleTexte">
              {item.equipments && (
                <ul>
                  {item.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    );
  } else if (type === 'data2') {
     const allOpen = isOpen.every((open) => open);

  return (
    <div className={`page ${allOpen ? 'all-open' : ''}`}>
      {data.map((collapse, index) => (
        <div className={`apropos-collapsable${index + 1}`} key={index}>
          <div className='RectangleTitre' onClick={() => handleClick(index)}>
            <h3>{collapse.titre}</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen[index] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen[index] && (
            <div className={`RectangleTexte ${isOpen[index] ? 'open' : ''}`}>
              <div className='bis'>
                <p>{collapse.texte}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
  } else {
    return null;
  }
};

export default Collapse;



// <Collapse data={data1} id={id} type="data1" />
//import { dataCollapse as data2 } from './dataCollapse';
// <Collapse data={data2}  type="data2" />



