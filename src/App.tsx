import React from 'react';
import heart from './assets/heart.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="heart-beating" alt="logo" />
      </header>
    </div>
  );
}

export default App;
