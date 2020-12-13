//This component renders the dark/light mode toggle switch.

import React, { useState, useEffect } from "react";

const Toggle = props => {
  const [icon, setIcon] = useState(props.theme);

  useEffect(() => {
    const curIcon = props.theme === "light" ? "moon" : "sun";

    setIcon(curIcon);
  }, [props.theme]);

  return (
    <div className='toggle'>
      <p className='info-tag'>
        <i
          className={`icon fas fa-${icon}`}
          onClick={e => props.toggleTheme()}></i>
        [displayMode].....[drk]
      </p>
    </div>
  );
};

export default Toggle;
