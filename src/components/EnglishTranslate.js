//This Component translates from English to Krakoan

import React, {useState, useEffect} from "react";

//Assets
import imageLoader from '../characters.js'


//{ images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

const EnglishTranslate = () => {
const [characters, setCharacters] = useState([]);

useEffect(()=>{
   const importedCharacters = imageLoader();
   setCharacters(importedCharacters);
}, []);



  return (
    <div className='english-translate'>
      <div className='input-output-wrapper'>
        <div className='input-container'>
          <textarea className='english-input'></textarea>
          <p className='info-tag'>[MTNT_dRamsey]..[ADMIN]</p>
        </div>
        <div className = 'krakoan-output'>
         {/* <img src = {} */}
        </div>

      </div>
    </div>
  );
};

export default EnglishTranslate;
