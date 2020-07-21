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
  pups && console.log(pups[0]);
  return (
    <div className="landing-container">
      <div className="landing">
        <form action="">
          <input type="text" placeholder="www.puppyapi.com/pups" />
          <button>FETCH!</button>
        </form>
        <div className="pups">
          {pups &&
            pups.map(pup => {
              return (
                <img src={pup.img_url} key={pup.pups_id} alt="" />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Landing;