import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Carousel(props) {

  // Utilise le hook useParams pour extraire l'ID du logement
  const { id } = useParams();

  // Recherche l'objet de données correspondant à l'ID fourni dans les propriétés 'props' passées au composant
  const logement = props.data.find(item => item.id === id);
  const { title,location, pictures } = logement;

  // Utilise le hook useState pour stocker l'index de l'image courante dans un carrousel, initialise à 0
  const [currentIndex, setCurrentIndex] = useState(0);
   

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

      const currentImageNumber = currentIndex + 1;
      const totalImages = pictures.length;
      return (
        <>
          <div className="carousel-container">
            <div className="carousel-arrow-container">
                <ArrowBackIosIcon onClick={prevImage} />
                <img src={pictures[currentIndex]} alt={title} />
                <ArrowForwardIosIcon onClick={nextImage} />
                <div className="image-counter">
                {`${currentImageNumber}/${totalImages}`}
            </div>
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


