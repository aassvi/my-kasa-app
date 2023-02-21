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

