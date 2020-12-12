//This component renders the dark/light mode toggle switch.

import React, { useState, useEffect } from "react";

const Toggle = props => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const curIcon = props.theme === "light" ? "moon" : "sun";

    setIcon(curIcon);
  }, [props.theme]);

  return (
    <div className='toggle'>
      <button className='toggle-button' onClick={e => props.toggleTheme()}>
        <i className={`icon fas fa-${icon}`}></i>
      </button>
    </div>
  );
};

export default Toggle;
