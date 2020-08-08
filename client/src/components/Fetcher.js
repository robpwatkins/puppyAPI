import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';
import { Close } from '@material-ui/icons';

const Fetcher = props => {
  const ref = useRef();
  const [pup, setPup] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  useOnClickOutside(ref, () => props.setFetcherActive(false));

  const handleClick = () => {
    props.setFetcherActive(true);
    getRandomPup();
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const handleCloserClick = () => {
    props.setFetcherActive(false);
    setIsHovered(false);
  }

  const getRandomPup = async () => {
    const response = await fetch('pups/1');
    const body = await response.json();
    setPup(body);
  }

  let fetcherClass = [
    'fetcher-outline',
    props.fetcherActive && 'active',
    isHovered && 'hovered'
  ];
  fetcherClass = fetcherClass.join(' ');

  console.log(pup);
  return (
    <div className={fetcherClass}>
      <div 
        className="fetcher-container"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {!props.fetcherActive && 
        <h3>Give it a try!</h3>}
        {props.fetcherActive && pup.length > 0 &&
        <div className="fetched-pup">
          <Close className="fetcher-closer" fontSize="small" onClick={handleCloserClick} />
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
    </div>
  )
}

export default Fetcher;