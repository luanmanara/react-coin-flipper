import React from 'react';
import logo from './logo.svg';
import './App.css';
import Flipper from './Flipper';

function App() {
  return (
    <div className="App">
      <Flipper maxFlips={5} />
    </div>
  );
}

export default App;
