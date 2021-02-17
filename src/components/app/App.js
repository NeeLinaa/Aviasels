import React from 'react';
import classes from './App.module.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';
import TickedTypesBtns from '../ticked-types-btns/TickedTypesBtns';
import TickedCard from '../ticked-card/TickedCard';



function App() {
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.mainContent}>
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
