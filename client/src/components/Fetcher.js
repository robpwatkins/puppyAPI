import React from 'react';

const Fetcher = () => {
  return (
    <div className="fetcher-container">
      <h3>Fetch a pup!</h3>
      <div className="fetcher">
        <div className="fake-input">www.puppyAPI.com/pups</div>
        <button>FETCH!</button>
      </div>
    </div>
  )
}

export default Fetcher;