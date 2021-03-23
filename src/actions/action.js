import {
  CHANGE_ALL_CHECK_ON,
  CHANGE_ALL_CHECK_OFF,
  CHANGE_ONE_CHECK_ON,
  CHANGE_MAIN_CHECK_OFF,
  GET_All_TICKETS,
  GET_CHEAP_TICKETS,
  GET_FAST_TICKETS,
  ERROR_HANDLING,
} from '../types/actionTypes';

export const changeCheckOn = () => ({
  type: CHANGE_ALL_CHECK_ON,
});

export const changeCheckOff = () => ({ type: CHANGE_ALL_CHECK_OFF });

// export const changeChecks = (off, on) => ({payload = ({type: CHANGE_ALL_CHECK_ON}) ? on : off})

export const changeOneCheckOn = (arr) => ({ type: CHANGE_ONE_CHECK_ON, arr });

export const changeMainCheckOff = () => ({ type: CHANGE_MAIN_CHECK_OFF });

export const errorHandling = (err) => ({ type: ERROR_HANDLING, payload: err });

export const getAllTickets = (items) => ({ type: GET_All_TICKETS, allTickets: items });

export const getCheapTickets = (items) => ({ type: GET_CHEAP_TICKETS, cheapTickets: items, flag: false });

export const getFastTickets = (items) => ({ type: GET_FAST_TICKETS, fastTickets: items, flag: true });
