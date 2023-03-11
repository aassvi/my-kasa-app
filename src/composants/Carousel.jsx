/** 
 * Fonction Carousel affiche un caroussel d'images appartenant à l'Id du logement cliqué par l'utilisateur
 * Utilise la fonctionnalité Hook de React pour gérer l'état local du composant 
 * Utilise le hook useParams pour extraire l'ID du logement dans URL,
 * recherche l'objet de données correspondant à l'ID fourni dans les propriétés 'props' passées au composant
 * Si le tableau contient une seule image l'affiche sans flèches sinon 
 * Utilise le hook useState pour stocker l'index de l'image courante du carrousel dans la variable d'état currentIndex, initialise à 0
 * utilise la variable setCurrentIndex pour déplacer l'indice de cuurentIndex à chaque évenement onClick en utilisant deux fonctions 
 * pour savoir si l'on affiche l'image précedente ou suivante
 */
import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import arrowBackwords from '../assets/arrowBackwords.png';
import arrowFoward from '../assets/arrowFoward.png';

function Carousel(props) {
  const { id } = useParams();
  const logement = props.data.find(item => item.id === id);
  const { title,location, pictures } = logement;

  const [currentIndex, setCurrentIndex] = useState(0);

  if (pictures.length === 1){
    return (
      <>
        <div className="carousel-container">
          <img src={pictures} alt={title} className="carousel-image" />
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
          <img src={arrowBackwords} alt="previous" onClick={prevImage} className="arrow-backwards" />
          <img src={pictures[currentIndex]} alt={title} className="carousel-image" />
          <img src={arrowFoward} alt="next" onClick={nextImage} className="arrow-forward" />
          <div className="image-counter">
            {`${currentImageNumber}/${totalImages}`}
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

