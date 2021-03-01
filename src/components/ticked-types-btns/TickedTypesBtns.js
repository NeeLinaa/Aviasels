import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';

import './TickedTypesBtns.scss';

const TickedTypesBtns = ({ ticketsArr, getCheapTickets, getFastTickets }) => {
  const filterCheapTickets = (items) => {
    getCheapTickets(items.sort((prev, next) => prev.price - next.price));
  };

  const filterFastTickets = (items) => {
    getFastTickets(items.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration));
  };

  return (
    <div className="tickedTypesBtns">
      <input
        type="submit"
        value="САМЫЙ ДЕШЕВЫЙ"
        className="tickedBtn cheapTicked"
        onClick={() => filterCheapTickets(ticketsArr)}
      />
      <input
        type="submit"
        value="САМЫЙ БЫСТРЫЙ"
        className="tickedBtn fastTicked"
        onClick={() => filterFastTickets(ticketsArr)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ ticketsArr: state.ticketsArr[0] });

TickedTypesBtns.defaultProps = {
  ticketsArr: [],
  getCheapTickets: () => {},
  getFastTickets: () => {},
};

TickedTypesBtns.propTypes = {
  ticketsArr: PropTypes.array,
  getCheapTickets: PropTypes.func,
  getFastTickets: PropTypes.func,
};

export default connect(mapStateToProps, actions)(TickedTypesBtns);
