import React, {useEffect} from 'react';
import classes from './App.module.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';
import TickedTypesBtns from '../ticked-types-btns/TickedTypesBtns';
import TickedCard from '../ticked-card/TickedCard';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';


function App({getAllTickets}) {

  const api = 'https://aviasales-test-api.java-mentor.com';

  const getSearchId = () => {
    fetch(`${api}/search`)
    .then(response => response.json())
    .then(data => localStorage.setItem('searchId', data.searchId))
  }

  const sendRequest = () => {
        fetch(`${api}/tickets?searchId=${localStorage.getItem('searchId')}`)
        .then(response => response.json())
        .then(items => getAllTickets(items.tickets))
}

  useEffect(() => {
    getSearchId()
    sendRequest()
  }, [])

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

export default connect(null, actions)(App);
