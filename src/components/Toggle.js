//This component renders the dark/light mode toggle switch.

import { render } from "@testing-library/react";
import React from "react";

const Toggle = props => {
  const renderToggle = () => {
    const className = "icon fas fa-";

    return (
      <i className={className + (props.theme === "light" ? "moon" : "sun")}></i>
    );
  };

  return (
    <div className='toggle'>
      {/* <button onClick={e => props.toggleTheme()}>Theme</button>
      <i className='fas fa-sun icon'></i>
      <i className='fas fa-moon icon'></i> */}
      {renderToggle()}
    </div>
  );
};

export default Toggle;
