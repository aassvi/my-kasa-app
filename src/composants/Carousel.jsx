import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../services/data';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Carousel() {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const logement = data.find(item => item.id === id);
    const { title,location, pictures } = logement;

    if (pictures.length === 1){
      return (
        <>
          <div className="carousel-container">
            <div className="carousel-arrow-container">  
              <img src={pictures} alt={title} />
            </div>
            
          </div>
          <div className="Carousel-title-location">
                <h1>{title}</h1>
                <p>{location}</p>
          </div>
          
        </>
      );
     
    } else{
    const prevImage = () => {
          setCurrentIndex(currentIndex - 1);
          if (currentIndex === 0) {
          setCurrentIndex(pictures.length - 1);
          }
    };

    const nextImage = () => {
          setCurrentIndex(currentIndex + 1);
          if (currentIndex === pictures.length - 1) {
          setCurrentIndex(0);
          }
    };

    
    return (
      <>
        <div className="carousel-container">
          <div className="carousel-arrow-container">
              <ArrowBackIosIcon onClick={prevImage} />
              <img src={pictures[currentIndex]} alt={title} />
              <ArrowForwardIosIcon onClick={nextImage} />
          </div>
          
        </div>
        <div className="Carousel-title-location">
              <h1>{title}</h1>
              <p>{location}</p>
        </div>
        
      </>
    );
    }  
}

export default Carousel;

/*import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';



function Carousel() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);
  const { pictures } = logement;
  const [currImg, setCurrImg] = useState(1);
  

  return (
    <div className="carousel">
       <div className="carouselInner"
          style={{backgroundImage:`url(${pictures[currImg].img})`}}>
       
      </div>
    </div>
  );
}

export default Carousel;



/*import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';



function Carousel() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);
  const { title, pictures } = logement;

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        {pictures.map(picture => (
          <img src={ picture } alt={title} className="carousel-image" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
*/
