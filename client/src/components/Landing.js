import React, { useState, useEffect } from 'react';
import Fetcher from './Fetcher';
import Login from './Login';

const Landing = props => {
  const [pups, setPups] = useState();
  const [adderActive, setAdderActive] = useState(false);

  useEffect(() => {
    getPups();
  }, [])

  useEffect(() => {
    props.setPupsActive(true);
    props.setLoginActive(false);
  }, [props.setPupsActive, props.setLoginActive]);

  const getPups = async () => {
    const response = await fetch('/pups');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    setPups(body);
  }
  // console.log(props.loginActive);
  return (
    <div className="landing-container">
      <div className="landing">
        {props.pupsActive && 
          <Fetcher />}
        {props.loginActive &&
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