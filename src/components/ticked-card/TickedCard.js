import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import TickedInfo from '../ticked-info/TickedInfo';
import * as actions from '../../actions/action';

import classes from './TickedCard.module.scss';
import S7_Logo from '../../img/S7_Logo.png';

const TickedCard = ({ allTickets, flag, error, otherCheckboxes, loading }) => {
  const [renderArrTicket, setRenderArrTicket] = useState([]);
  const checkValues = Object.values(otherCheckboxes);

  function createTicketCard(data) {
    function priceFormatting(num) {
      return `${String(num).slice(0, -3)} ${String(num).slice(-3)}`;
    }

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

  const sortTickets = () => {
    const newRendTick = [];
    const idx = [];
    if (allTickets) {
      checkValues.findIndex((value, index) => {
        if (value) idx.push(Number(index) - 1);
        return '';
      });
      allTickets.map((elem) => {
        if (idx.includes(elem.segments[0].stops.length)) newRendTick.push(elem);
        return elem;
      });
    }
    return setRenderArrTicket(newRendTick.slice(0, 5));
  };

  useEffect(() => {
    if (allTickets) sortTickets();
  }, [flag, allTickets, otherCheckboxes]);

  if (error[0]) {
    return (
      <div style={{ fontSize: 13, color: '#4A4A4A', fontWeight: 'normal' }}>Что-то пошло не так, обновите страницу</div>
    );
  }

  function spinner() {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    );
  }

  if (loading) return spinner();

  if (checkValues[1] === false && checkValues[2] === false && checkValues[3] === false && checkValues[4] === false) {
    return (
      <div style={{ fontSize: 13, color: '#4A4A4A', fontWeight: 'normal' }}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    );
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
