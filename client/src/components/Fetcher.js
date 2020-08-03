import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Fetcher = () => {
  const ref = useRef();
  const [fetcherActive, setFetcherActive] = useState(false);
  useOnClickOutside(ref, () => setFetcherActive(false));

  const getRandomPup = async () => {
    const response = await fetch('pups/1');
    const body = await response.json();
    console.log(body[0]);
  }

  return (
    <div 
      className={
        fetcherActive 
        ? "fetcher-container active" 
        : "fetcher-container"}
      ref={ref}>
      <h3>Give it a try!</h3>
      <div className="fetcher">
        <div className="fake-input">https://www.puppyapi.com/pups/1</div>
        <button onClick={() => {
          setFetcherActive(true);
          getRandomPup();
          }}>fetch</button>
      </div>
    </div>
  )
}

export default Fetcher;