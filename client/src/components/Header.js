import React from 'react';
import Badge from './Badge';
import Nav from './Nav';

const Header = props => {
  return (
    <header>
      {/* <Badge /> */}
      <div className="tag-and-nav">
        <div className="tagline-container">
          {/* <h1 className="tagline">Let's play fetch.</h1> */}
        </div>
        {/* <Nav 
          pupsActive={props.pupsActive}
          setPupsActive={props.setPupsActive}
          loginActive={props.loginActive}
          setLoginActive={props.setLoginActive}
          adderActive={props.adderActive}
          setAdderActive={props.setAdderActive}
        /> */}
      </div>
    </header>
  )
}

export default Header;