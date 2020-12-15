//This component renders the home (data) view of the app

import React from "react";

// Styles
import "../css/home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className='home-data-container'>
        <div className='home-data-top'></div>
        <div className='data-text-wrapper'>
          <p className='data-text'>
            An intro to krakoan language and explanation. there will be menition
            of hickman and ramsey as well as explantions on extra characters,
            etc.
          </p>
          <br></br>
          <p className='data-text'>
            Egestas erat imperdiet sed euismod nisi porta lorem mollis. Felis
            donec et odio pellentesque diam volutpat commodo sed. Ante in nibh
            mauris cursus mattis molestie a. Risus ultricies tristique nulla
            aliquet enim tortor at auctor urna. Sed lectus vestibulum mattis.
          </p>
          <br></br>
          <p className='data-text'>
            Egestas erat imperdiet sed euismod nisi porta lorem mollis. Felis
            donec et odio pellentesque diam volutpat commodo sed. Ante in nibh
            mauris cursus mattis molestie a. Risus ultricies tristique nulla
            aliquet enim tortor at auctor urna. Sed lectus vestibulum mattis.
          </p>
        </div>
      </div>
      <div className='home-info-tag-container'>
        <p className='info-tag'>[MTNT_dRamsey]..[ADMIN]</p>
        <p className='info-tag'>[HMN_jHickman]..[ADMIN]</p>
      </div>
    </div>
  );
};

export default Home;
