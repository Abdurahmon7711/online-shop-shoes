import React from 'react';
import Catigories from './homepage/Catigories';
import Home from './homepage/Home';
import Nav from './homepage/Nav';
import './homepage/style/main.scss';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Catigories/>
        <Home/>
    </div>
  );
}

export default App;
