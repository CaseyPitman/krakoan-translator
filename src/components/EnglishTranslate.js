//This Component translates from English to Krakoan

import React, { useState, useEffect } from "react";

//Styles
import "../css/english-translate.css";

//Assets
// import imageLoader from "../characters.js";

//{ images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

const EnglishTranslate = () => {
  const [characters, setCharacters] = useState();

  const importAll = r => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../images/krakoan-characters", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className='english-translate'>
      <div className='input-output-wrapper'>
        <div className='input-container'>
          <textarea className='english-input'></textarea>
          <p className='info-tag'>[INPUT.TXT].......[ENG]</p>
        </div>
        <div className='output-container'>
          <div className='translated-text'>
            <img src={images["C.jpg"].default} className='k-output-character' />
            <img src={images["A.jpg"].default} className='k-output-character' />
            <img src={images["S.jpg"].default} className='k-output-character' />
            <img src={images["E.jpg"].default} className='k-output-character' />
            <img src={images["Y.jpg"].default} className='k-output-character' />
            <img src={images["space-bar.jpg"].default} className='k-output-character' />
            <img src={images["P.jpg"].default} className='k-output-character' />
            <img src={images["I.jpg"].default} className='k-output-character' />
            <img src={images["T.jpg"].default} className='k-output-character' />
            <img src={images["M.jpg"].default} className='k-output-character' />
            <img src={images["A.jpg"].default} className='k-output-character' />
            <img src={images["N.jpg"].default} className='k-output-character' />
          </div>
          <p className='info-tag'>[OUTPUT.TXT].....[KRKN]</p>
        </div>
      </div>

      <div className='k-e-trans-info-tag'>
        <p className='info-tag'>[e_k_trans_init]..[exe]</p>
      </div>
    </div>
  );
};

export default EnglishTranslate;
