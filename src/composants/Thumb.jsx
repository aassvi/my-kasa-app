import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

function Gallery() {
  return (
    <div className="kasa-home-thumb">
      {data.map(item => (
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



/*import React from 'react';
import {data} from './data';

function Gallery() {
return (
<div className="kasa-home-thumb">
{data.map(item => (
<div className="rectangle2" key={item.id}>
<img src={item.cover} alt={item.title} />
<h2>{item.title}</h2>
</div>
))}
</div>
);
}

export default Gallery;

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
const filePath = './services/data.json';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(filePath)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.cover} alt={item.title} />
          <p>{item.description}</p>
          <h4>Photos :</h4>
          <ul>
            {item.pictures.map(picture => (
              <li key={picture }>
                <img src={ picture } alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Gallery;




import React from 'react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';


//import React, { useState } from 'react';

const photos = [
  {
    src: logo,
    width: 50,
    height: 50
  },
  {
    src: logo2,
    width: 50,
    height: 50
  },
  // Ajoutez autant d'images que vous le souhaitez
];


function Gallery() {
  return (
    <div className="gallery-container">
      {photos.map(photo => (
        <img src={photo.src} width={photo.width} height={photo.height} alt="dsfj" />
      ))}
    </div>
  );
}

export default Gallery;

/*function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="gallery-container">
      <img src={photos[currentImage].src} className="image" alt="ifdshf" />
      <div className="buttons-container">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setCurrentImage(index)}
            className={`button ${index === currentImage ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;


/*function Gallery() {
  return (
    <div className='kasa-home-thumb'>
      <div className='rectangle2'>
      <h3 >Titre de la location </h3>
      </div>
    </div>
  )
}

export default Gallery;
*/