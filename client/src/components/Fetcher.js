import React, { useState } from 'react';

const Fetcher = () => {
  const [fetcherActive, setFetcherActive] = useState(false);

  return (
    <div className={fetcherActive ? "fetcher-container active" : "fetcher-container"}>
      <h3>Give it a try!</h3>
      <div className="fetcher">
        <div className="fake-input">https://www.puppyapi.com/pups/1</div>
        <button onClick={() => setFetcherActive(true)}>fetch</button>
      </div>
    </div>
  )
}

export default Fetcher;