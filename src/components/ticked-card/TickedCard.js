import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TickedInfo from '../ticked-info/TickedInfo';
import * as actions from '../../actions/action';
import { priceFormatting, sortTickets } from '../../utilits';
import Warning from '../warning/Warning';
import Error from '../error/Error';
import Spiner from '../spiner/Spiner';

import classes from './TickedCard.module.scss';
import S7_Logo from '../../img/S7_Logo.png';

const TickedCard = ({ allTickets, flag, otherCheckboxes, error, loading }) => {
  const [renderArrTicket, setRenderArrTicket] = useState([]);
  const checkValues = Object.values(otherCheckboxes);

  function createTicketCard(data) {
    const key = data.price + data.carrier + data.segments[0].duration;

    return (
      <div className={classes.tickedCard} key={key}>
        <div className={classes.sumAndLogo}>
          <span className={classes.price}>{priceFormatting(data.price)} P</span>
          <img src={S7_Logo} alt="S7 Airlines" />
        </div>

        <TickedInfo dataInfo={data.segments[0]} />
        <TickedInfo dataInfo={data.segments[1]} />
      </div>
    );
  }

  useEffect(() => {
    if (allTickets) sortTickets(allTickets, checkValues, setRenderArrTicket);
  }, [flag, allTickets, otherCheckboxes]);

  if (error[0]) <Error />;

  if (loading) return <Spiner />;

  // проверяю состояние чекбоксов для количесва пересадок 1-4
  if (checkValues[1] === false && checkValues[2] === false && checkValues[3] === false && checkValues[4] === false) {
    return <Warning />;
  }
  return <div>{allTickets && renderArrTicket.map((ticket) => createTicketCard(ticket))}</div>;
};

const mapStateToProps = (state) => ({
  allTickets: state.ticketsArr[0],
  error: state.error,
  flag: state.ticketsArr.flag,
  otherCheckboxes: state.checkboxes.otherCheckboxes,
});

TickedCard.defaultProps = {
  allTickets: [],
  error: false,
  flag: false,
  otherCheckboxes: {},
  loading: true,
};

TickedCard.propTypes = {
  allTickets: PropTypes.array,
  error: PropTypes.bool,
  flag: PropTypes.bool,
  otherCheckboxes: PropTypes.shape({
    0: PropTypes.bool,
    1: PropTypes.bool,
    2: PropTypes.bool,
    3: PropTypes.bool,
    4: PropTypes.bool,
  }),
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, actions)(TickedCard);
