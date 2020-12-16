//This Component translates from English to Krakoan

import React, { useState, useEffect } from "react";

//Styles
import "../css/english-translate.css";

//Assets
// import imageLoader from "../characters.js";

//{ images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

const EnglishTranslate = () => {
  const [characters, setCharacters] = useState();

  const importAll =(r)=>{
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../images/krakoan-characters", false, /\.(png|jpe?g|svg)$/)
  );


  return (
    <div className='english-translate'>
      <div className='input-output-wrapper'>
        <div className='input-container'>
          <textarea className='english-input'></textarea>
          <p className='info-tag'>[MTNT_dRamsey]..[ADMIN]</p>
        </div>
        <div className='krakoan-output'>
          <img src={images["A.jpg"].default} className='k-output-character' />
        </div>
      </div>
    </div>
  );
};

export default EnglishTranslate;
