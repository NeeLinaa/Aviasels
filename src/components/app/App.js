import React from 'react';
import './App.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';
import TickedTypesBtns from '../ticked-types-btns/TickedTypesBtns';
import TickedCard from '../ticked-card/TickedCard';



function App() {
  return (
    <div className='container'>
      <Logo />
      <div className='mainContent'>
        <Filters />
        <div>
          <TickedTypesBtns />
          <TickedCard />
        </div>
      </div>

    </div>
  );
}

export default App;
