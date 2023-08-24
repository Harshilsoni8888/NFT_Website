import React from 'react';
import "./App.css";
import Header from './comps/Header/Index';
import TopFold from './comps/TopFold/Index';
import BI from './comps/BI/Index';
import TNFT from './comps/TNFT/Index';
import Info from './comps/Info/Index';
import Footer from './comps/Footer/Index';

const App = () => {
  return (
    <div className='max-width'>
     <Header/>
     <TopFold/>
     <BI/>
      <TNFT/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default App