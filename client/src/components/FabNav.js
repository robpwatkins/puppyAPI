import React, { useState } from 'react';
import Add from '@material-ui/icons/Add';

const FabNav = () => {
  const [fabNavActive, setFabNavActive] = useState(false);

  const handleClick = () => {
    setFabNavActive(!fabNavActive);
  }

  return (
    <div className="box">
      <div className={fabNavActive ? "fab-nav-container active" : "fab-nav-container"}>
        <ul>
          <li>Pups</li>
          <li>Login</li>
          <li>Documention</li>
        </ul>
      </div>
        <div onClick={handleClick} className="fab-nav">
          <div className="background"></div>
          <Add style={{fontSize: '35px'}} />
        </div>
    </div>
  )
}

export default FabNav;