import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Carousel(props) {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const logement = props.data.find(item => item.id === id);
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


