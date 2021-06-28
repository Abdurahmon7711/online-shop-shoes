import React from 'react';
import Catigories from './homepage/Catigories';
import Home from './homepage/Home';
import Nav from './homepage/Nav';
import './style/main.scss';
import SmartWatch from './Recomendet/SmartWatch';
import Ads from './ads/Ads';
import Collec from './Newcollection/Collec';
import Trending from './Newcollection/Trending';
import Rfooter from './Recomendet/Rfooter';
   
function App() {
  return (
    < >
        <Nav/>
        <Catigories/>
        <Home/>
        <SmartWatch/>
        <Ads/>
        <Collec/>
        <Ads/>
        <Trending/>
        <Ads/>
        <Rfooter/>
    </>
  );
}

export default App;
