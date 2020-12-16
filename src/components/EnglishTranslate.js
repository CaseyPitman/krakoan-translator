//This Component translates from English to Krakoan

import React, { useState, useEffect } from "react";

//Styles
import "../css/english-translate.css";

//Assets
// import imageLoader from "../characters.js";

//{ images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

const EnglishTranslate = () => {
  const [characters, setCharacters] = useState();

  //Maybe move all this to a seperate file
  const importAll = r => {
    let chars = {};
    r.keys().map((item, index) => {
      chars[item.replace("./", "")] = r(item);
    });
    return chars;
  };

  const chars = importAll(
    require.context("../images/krakoan-characters", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(chars);
  //Maybe move all this to a seperate file

  return (
    <div className='english-translate'>
      <div className='input-output-wrapper'>
        <div className='input-container'>
          <textarea
            className='input-text'
            placeholder='Enter English text. Use only letter characters. The Krakoan language does not currently include numbers.'></textarea>
          <p className='info-tag'>[INPUT.TXT].......[ENG]</p>
        </div>
        <div className='output-container'>
          <div className='translated-text'>
            <img src={chars["C.jpg"].default} className='k-output-character' />
            <img src={chars["A.jpg"].default} className='k-output-character' />
            <img src={chars["S.jpg"].default} className='k-output-character' />
            <img src={chars["E.jpg"].default} className='k-output-character' />
            <img src={chars["Y.jpg"].default} className='k-output-character' />
            <img
              src={chars["space-bar.jpg"].default}
              className='k-output-character'
            />
            <img src={chars["P.jpg"].default} className='k-output-character' />
            <img src={chars["I.jpg"].default} className='k-output-character' />
            <img src={chars["T.jpg"].default} className='k-output-character' />
            <img src={chars["M.jpg"].default} className='k-output-character' />
            <img src={chars["A.jpg"].default} className='k-output-character' />
            <img src={chars["N.jpg"].default} className='k-output-character' />
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
