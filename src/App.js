import React from 'react';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import './App.css';
import data from './data.js';

const App = () => {
  const destinationList = data.map((item) => {
    return <Destination key={item.id} item={item} />;
  });

  return (
    <div className="app">
      <Navbar />
      {destinationList}
    </div>
  );
};

export default App;
