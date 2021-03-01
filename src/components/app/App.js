import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';
import TickedTypesBtns from '../ticked-types-btns/TickedTypesBtns';
import TickedCard from '../ticked-card/TickedCard';
import * as actions from '../../actions/action';

function App({
  getAllTickets,
  // errorHandling
}) {
  const api = 'https://aviasales-test-api.java-mentor.com';
  const tickArr = [];
  const [loading, setLoading] = useState(true);

  const getSearchId = () => {
    fetch(`${api}/search`)
      .then((response) => response.json())
      .then((data) => localStorage.setItem('searchId', data.searchId));
  };

  const sendRequest = () => {
    fetch(`${api}/tickets?searchId=${localStorage.getItem('searchId')}`)
      .then((response) => response.json())
      .then((items) => {
        if (!items.stop) {
          tickArr.push(...items.tickets);
          sendRequest();
        }
        setLoading(false);
        getAllTickets(tickArr);
      })
      .catch(() => {
        // errorHandling(true)
        sendRequest();
      });
  };

  useEffect(() => {
    getSearchId();
    sendRequest();
  }, []);

  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.mainContent}>
        <Filters />
        <div>
          <TickedTypesBtns />
          <TickedCard loading={loading} />
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {
  getAllTickets: () => {},
};

App.propTypes = {
  getAllTickets: PropTypes.func,
};

export default connect(null, actions)(App);
