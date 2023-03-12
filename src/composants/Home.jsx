/**
 * Fonction Home retourne l'affichage d'une section avec une image et une gallerie de photos 
 * en utilisant le composant Thumb et en lui passant en props un tableau data
 */

import React from 'react';
import paysage2 from '../assets/paysage2.png';
import paysagemobile from '../assets/paysagemobile.png';
import Thumb from './Thumb';
import { data } from '../services/data';

function Home() {
  return (
    <div className='kasa-home'>
      <div className='kasa-home_body'>
        <div className='kasa-home-body_section1'>
           <h1>Chez vous, partout et ailleurs</h1>
          <div className='kasa-home-body-section1_desk'>
           
            <img src={paysage2} alt="paysage" />
          </div>
          <div className='kasa-home-body-section1_mobile'>
           
            <img src={paysagemobile} className= 'sectionimage'alt="paysage" />
          </div>
        </div>
        <div className='kasa-home-body_gallery'>
          <div className="kasa-home-thumb">
            {data.map(item => (
              <Thumb data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
