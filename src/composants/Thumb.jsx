/**
 * Fonction affiche une image 
 * 
 * en créant un lien pour chaque élément qui redirige vers une page de détail du logement correspondant.
 */
import React from 'react';
import { Link } from 'react-router-dom';

function Thumb(props) {
  const { id, cover, title } = props.data;
  return (
    <Link to={`/logement/${id}`}>
      <div className="rectangle2">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Thumb;


/*
import React from 'react';
import { Link } from 'react-router-dom';

function Gallery(props) {
  return (
    
    <div className="kasa-home-thumb">
      {props.data.map(item => (
        <Link to={`/logement/${item.id}`} key={item.id}>
          <div className="rectangle2">
            <img src={item.cover} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))} 
    </div>

  );
 
}

export default Gallery;

*/

