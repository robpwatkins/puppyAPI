import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Fetcher = () => {
  const ref = useRef();
  const [fetcherActive, setFetcherActive] = useState(false);
  const [pup, setPup] = useState([]);
  useOnClickOutside(ref, () => setFetcherActive(false));

  const handleClick = () => {
    setFetcherActive(true);
    getRandomPup();
  }

  const getRandomPup = async () => {
    const response = await fetch('pups/1');
    const body = await response.json();
    setPup(body);
  }
  console.log(pup);
  return (
    <div 
      className={
        fetcherActive 
        ? "fetcher-container active" 
        : "fetcher-container"}
      ref={ref}>
      {!fetcherActive && 
      <h3>Give it a try!</h3>}
      {fetcherActive && pup.length > 0 &&
      <img src={pup[0].img_url} alt=""/>}
      <div className="fetcher">
        <div className="fake-input">https://www.puppyapi.com/pups/1</div>
        <button onClick={handleClick}>fetch</button>
      </div>
    </div>
  )
}

export default Fetcher;