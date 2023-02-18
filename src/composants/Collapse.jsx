import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container ">
      <div className="collapse-wrapper">
        <div className="collapse-header  ">
          <h3>{title}</h3>
          <KeyboardArrowDownIcon
            className={`collapse-icon ${isOpen ? 'open' : 'closed'}`}
            onClick={handleToggle}
          />
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

/*
.collapse-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.collapse-wrapper {
  background-color: #eee;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
}

.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.collapse-icon {
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s;

  &.open {
    transform: rotate(180deg);
  }
}

.collapse-content {
  background-color: #fff;
  padding: 1rem;
  margin-top: 1rem;
}

.collapse-content-closed {
  height: 0;
  overflow: hidden;
}


/*.collapse-container {
  margin-bottom: 1rem;
  background-color: #eee;
  padding: 1rem;

  .collapse-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .collapse-title {
      margin: 0;
    }

    .collapse-icon {
      transition: transform 0.3s ease-in-out;
    }

    .collapse-icon.open {
      transform: rotate(180deg);
    }
  }

  .collapse-content {
    background-color: #fff;
    padding: 1rem;
    margin-top: 1rem;
  }

  .collapse-content ul {
    margin: 0;
    padding: 0;
  }

  .collapse-content li {
    list-style: none;
  }

  .collapse-content div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}





/*****************************************
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

*/

