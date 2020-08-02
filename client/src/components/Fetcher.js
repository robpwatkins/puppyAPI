import React from 'react';

const Fetcher = () => {
  return (
    <div className="fetcher-container">
      <h3>Give it a try!</h3>
      <div className="fetcher">
        <div className="fake-input">https://www.puppyapi.com/pups/1</div>
        <button>fetch</button>
      </div>
    </div>
  )
}

export default Fetcher;