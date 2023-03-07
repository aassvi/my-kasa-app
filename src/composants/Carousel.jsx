/** 
 * Fonction Carousel affiche un caroussel d'images appartenant à l'Id du logement cliqué par l'utilisateur
 * Utilise la fonctionnalité Hook de React pour gérer l'état local du composant 
 * Utilise le hook useParams pour extraire l'ID du logement dans URL,
 *  recherche l'objet de données correspondant à l'ID fourni dans les propriétés 'props' passées au composant
 * Si le tableau contient une seule image l'affiche sans fléches sinon 
 * Utilise le hook useState pour stocker l'index de l'image courante du carrousel dans la variable d'état currentIndex, initialise à 0
 * et le met à jour à dans la variable setCurrentIndex à chaque évenement onClick en utilisant deux fonctions 
 * pour savoir si l'on afficher l'image precedente ou suivante
 */
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel(props) {
  const { id } = useParams();
  const logement = props.data.find(item => item.id === id);
  const { title,location, pictures } = logement;

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


