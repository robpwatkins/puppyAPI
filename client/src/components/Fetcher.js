import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const Fetcher = props => {
  const ref = useRef();
  const [pup, setPup] = useState([]);
  useOnClickOutside(ref, () => props.setFetcherActive(false));

  const handleClick = () => {
    props.setFetcherActive(true);
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
        props.fetcherActive 
        ? "fetcher-container active" 
        : "fetcher-container"}
      ref={ref}>
      {!props.fetcherActive && 
      <h3>Give it a try!</h3>}
      {props.fetcherActive && pup.length > 0 &&
      <div className="fetched-pup">
        <img src={pup[0].img_url} alt=""/>
        <h3>Name: {pup[0].name}</h3>
        <h4>Breed: </h4>
        <h4>Birthday: </h4>
        <h4>Hometown: </h4>
        <h4>Gender: </h4>
        <h4>About: </h4>
      </div>
      }
      <div className="fetcher">
        <div className="fake-input">https://www.puppyapi.com/pups/1</div>
        <button onClick={handleClick}>fetch</button>
      </div>
    </div>
  )
}

export default Fetcher;