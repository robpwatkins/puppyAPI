import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';

const App = () => {
  const [pupsActive, setPupsActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  return (
    <div className="App">
      <Header 
        pupsActive={pupsActive}
        setPupsActive={setPupsActive}
        loginActive={loginActive}
        setLoginActive={setLoginActive}
      />
      <Landing 
        pupsActive={pupsActive}
        setPupsActive={setPupsActive}
        loginActive={loginActive}
        setLoginActive={setLoginActive}
      />
    </div>
  );
}

export default App;