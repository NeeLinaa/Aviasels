import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { filterCheapTickets, filterFastTickets } from '../../utilits';

import './TickedTypesBtns.scss';

const TickedTypesBtns = ({ ticketsArr, getCheapTickets, getFastTickets }) => (
    <div className="tickedTypesBtns">
      <input
        type="submit"
        value="САМЫЙ ДЕШЕВЫЙ"
        className="tickedBtn cheapTicked"
        onClick={() => filterCheapTickets(ticketsArr, getCheapTickets)}
      />
      <input
        type="submit"
        value="САМЫЙ БЫСТРЫЙ"
        className="tickedBtn fastTicked"
        onClick={() => filterFastTickets(ticketsArr, getFastTickets)}
      />
    </div>
  );

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
