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



