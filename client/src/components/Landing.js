import React, { useState, useEffect } from 'react';
import SubmitPup from './SubmitPup';
import { RepeatOneSharp } from '@material-ui/icons';

const Landing = () => {
  const [pups, setPups] = useState();

  useEffect(() => {
    getPups();
  }, [])

  const getPups = async () => {
    const response = await fetch('/pups');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    setPups(body);
  }
  pups && console.log(pups[0].img_url);
  return (
    <div className="landing-container">
      <div className="landing">
        {pups &&
          <img src={pups[0].img_url} alt=""/>
        }
      </div>
    </div>
  )
}

export default Landing;