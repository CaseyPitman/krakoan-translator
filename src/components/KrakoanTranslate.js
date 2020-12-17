//This component translates Krakoan to English

import React from "react";

//Components
import Keyboard from './Keyboard'

//Styles

import '../css/krakoan-translate.css'

const KrakoanTranslate = () => {
  return (
    <div className='krakoan-translate'>
      <div className = 'k-translate-container'>
        <div className='english-translation'>
          tranlated text goes here.
        </div>
        translated infotag
        <Keyboard />
        keyboard infotag
      </div>
    page-wide infotag
    </div>
  );
};

export default KrakoanTranslate;
