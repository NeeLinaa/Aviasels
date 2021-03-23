import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './App.module.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';
import TickedTypesBtns from '../ticked-types-btns/TickedTypesBtns';
import TickedCard from '../ticked-card/TickedCard';
import * as actions from '../../actions/action';
import ApiServices from '../../services';
import { saveSearchId } from '../../localStorages';

function App({
  getAllTickets,
  // errorHandling
}) {
  const tickArr = [];
  const [loading, setLoading] = useState(true);
  const apiServices = new ApiServices();
  const sessionId = localStorage.getItem('searchId');

  const getTicketsArray = () => {
    apiServices
      .sendRequest(sessionId)
      .then((items) => {
        if (!items.stop) {
          tickArr.push(...items.tickets);
          getTicketsArray();
        }
        setLoading(false);
        getAllTickets(tickArr);
      })
      .catch(() => {
        // errorHandling(true)
        getTicketsArray();
      });
  };

  useEffect(() => {
    const getResponsesFromServer = async () => {
      await apiServices.getSearchId().then((data) => saveSearchId(data.searchId));
      await getTicketsArray();
    };

    getResponsesFromServer();
  }, [apiServices.getSearchId, getTicketsArray]);

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
