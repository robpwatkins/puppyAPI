import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [pups, setPups] = useState();

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
    console.log(body);
    setPups(body);
  }
  // pups && console.log(pups[0]);
  return (
    <div className="landing-container">
      <div className="landing">
        {/* <form action="">
          <input type="text" placeholder="www.puppyapi.com/pups" />
          <button>FETCH!</button>
        </form> */}
        <div className="pups">
          {pups &&
            pups.map(pup => {
              return (
                <div className="pup-card">
                  <img src={pup.img_url} key={pup.pups_id} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Landing;