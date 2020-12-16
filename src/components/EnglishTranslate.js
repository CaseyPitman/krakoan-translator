//This Component translates from English to Krakoan

import React, { useState, useEffect } from "react";

//Styles
import "../css/english-translate.css";

//Assets
// import imageLoader from "../characters.js";

//{ images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

const EnglishTranslate = () => {
  const [characters, setCharacters] = useState({});

//   function importAll(r) {
//    return r.keys().map(r);
//  }
 
//  const images = importAll(require.context('../images/krakoan-characters', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images;
 }
 
 const images = importAll(require.context('../images/krakoan-characters', false, /\.(png|jpe?g|svg)$/));

 

  //  <img src={images['doggy.png']} />

  return (
    <div className='english-translate'>
      <div className='input-output-wrapper'>
        <div className='input-container'>
          <textarea className='english-input'></textarea>
          <p className='info-tag'>[MTNT_dRamsey]..[ADMIN]</p>
        </div>
        <div className='krakoan-output'>
          {/* <img src={process.env.PUBLIC_URL + "/krakoan-characters/C.jpg"} className = 'k-output-character' />
          <img src={process.env.PUBLIC_URL + "/krakoan-characters/A.jpg"} className = 'k-output-character'/>
          <img src={process.env.PUBLIC_URL + "/krakoan-characters/S.jpg"} className = 'k-output-character'/>
          <img src={process.env.PUBLIC_URL + "/krakoan-characters/E.jpg"} className = 'k-output-character'/>
          <img src={process.env.PUBLIC_URL + "/krakoan-characters/Y.jpg"} className = 'k-output-character'/> */}

          {/* <img src={images[0].default} className='k-output-characters' /> */}
          {/* <img src={images['A.jpg'].default} className='k-output-characters' /> */}
        </div>
      </div>
    </div>
  );
};

export default EnglishTranslate;
