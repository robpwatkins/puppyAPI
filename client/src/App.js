import React from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
