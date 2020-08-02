import React, { useState, useEffect } from 'react';
import Fetcher from './Fetcher';
import Login from './Login';

const Landing = () => {
  const [pups, setPups] = useState();
  const [loginActive, setLoginActive] = useState(false);

  useEffect(() => {
    getPups();
    console.log('got pups.');
  }, [])

  const getPups = async () => {
    const response = await fetch('/pups');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    setPups(body);
  }
  // console.log(pups);
  return (
    <div className="landing-container">
      <div className="landing">
        {!loginActive && 
          <Fetcher />}
        {loginActive &&
          <Login />}
        <div className="pups">
          {pups &&
            pups.map(pup => {
              return (
                <img src={pup.img_url} key={pup.pups_id} alt="" />
              )
            })
          }
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