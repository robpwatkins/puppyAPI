import React from 'react';
import Badge from './Badge';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Badge />
      <div className="tag-and-nav">
        <div className="tagline-container">
          <h1 className="tagline">Let's play fetch.</h1>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header;