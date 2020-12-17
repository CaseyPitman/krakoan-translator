//This component translates Krakoan to English

import React from "react";

//Components
import Keyboard from './Keyboard'

//Styles

import '../css/translate.css'

const KrakoanTranslate = () => {
  return (
    <div className='krakoan-translate'>
      <div className = 'input-output-wrapper'>
        <div className = 'input-output-wrapper-top'></div>
        <div className='english-translation'>
          translated text goes here.
        </div>
        translated infotag
        <Keyboard />
        keyboard infotag
      </div>
   
   <div className='translate-info-tag'>
     info tag for page
   </div>
    </div>
  );
};

export default KrakoanTranslate;
