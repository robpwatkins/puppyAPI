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
        <div className="pup-info">
          <h3>Name: {pup[0].name}</h3>
          <h4>Birthday: {pup[0].dob}</h4>
          <h4>Hometown: {pup[0].hometown}</h4>
          <h4>Breed: {pup[0].breed}</h4>
          <h4>Gender: {pup[0].gender}</h4>
          <h4>About: {pup[0].about}</h4>
        </div>
        <hr/>
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