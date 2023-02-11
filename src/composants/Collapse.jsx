import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dataCollapse } from './dataCollapse';

const Collapsable = () => {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));
  

  const handleClick = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <>
      {dataCollapse.map((collapse, index) => (
        <div className={`apropos-collapsable${index + 1}`} key={index}>
          <div className='RectangleTitre' onClick={() => handleClick(index)}>
            <h3>{collapse.titre}</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen[index] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen[index] && (
            <div className='RectangleTexte'>
              <div className='bis'>
                <p>{collapse.texte}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};


export default Collapsable;
/*
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Collapsable = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <div className="apropos-collapsable1">
          <div className='RectangleTitre' onClick={() => setIsOpen1(!isOpen1)}>
            <h3>Fiabilité</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen1 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen1 && (
            <div  className='RectangleTexte'>
              <div className='bis'>
              <p >Contenu La fiabilité  vient de la map dataCollapse</p>
            </div>
            </div>
          )}
        </div>
        <div className="apropos-collapsable2">
          <div className='RectangleTitre' onClick={() => setIsOpen2(!isOpen2)}>
            <h3>Respect</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen2 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen2 && (
            <div  className='RectangleTexte'>
              <div className='bis'>
              <p >Contenu La bienveillance vient de la map dataCollapse</p>
            </div>
            </div>
          )}
        </div>
        <div className="apropos-collapsable3">
          <div className='RectangleTitre' onClick={() => setIsOpen3(!isOpen3)}>
            <h3>Service</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen3 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen3 && (
            <div  className='RectangleTexte'>
              <div className='bis'>
              <p >Contenu La bienveillance vient de la map dataCollapse</p>
            </div>
            </div>
          )}
        </div>
        
        <div className="apropos-collapsable4">
          <div className='RectangleTitre' onClick={() => setIsOpen4(!isOpen4)}>
            <h3>Securité</h3>
            <KeyboardArrowDownIcon style={{ transform: isOpen4 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </div>
          {isOpen4 && (
            <div  className='RectangleTexte'>
              <div className='bis'>
              <p >Contenu La bienveillance vient de la map dataCollapse</p>
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

const Collapsable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="apropos-collapsable">
      <div className='RectangleTitre' onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <KeyboardArrowDownIcon style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </div>
      {isOpen && (
        <div  className='RectangleTexte'>
          <div className='bis'>
            {children}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Collapsable;






const dataCollapse = [
  {
    title: 'Respect',
    children: <p>Contenu La respect vient de la map dataCollapse</p>
  },
  {
    title: 'Tolérance',
    children: <p>Contenu La tolérance vient de la map dataCollapse</p>
  }
];


function Apropos(){
  return (
       <>
       <Header/>
       <div className='kasa-apropos'>
            <div className='kasa-apropos-section1'>  
            <img src={kalen2} className= 'sectionimagekalen'alt="paysage kalen" />       
            <img src={gustavo} className= 'sectionimagegustavo'alt="paysage gustavo" />  
            </div>   
       
            <div>
            <div className="collapse-container">
                 {dataCollapse.map((item, index) => (
                 <Collapsable key={index} title={item.title}>
                 {item.children}
                 </Collapsable>
                 ))}
            </div>
       </div>

       </div>
       </>
  )
}

export default Apropos;
*/
