//This component renders the dark/light mode toggle switch.

import React from "react";

const Toggle = props => {
  return (
    <div className='toggle'>
      <button onClick={e => props.toggleTheme()}>Theme</button>
      <i className='fas fa-sun icon'></i>
      <i className='fas fa-moon icon'></i>
    </div>
  );
};


export default Toggle;