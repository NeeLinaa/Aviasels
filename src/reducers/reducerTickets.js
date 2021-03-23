import { GET_CHEAP_TICKETS, GET_FAST_TICKETS, GET_All_TICKETS } from '../types/actionTypes';

const reduserTickets = (state = [], actions) => {
  switch (actions.type) {
    case GET_All_TICKETS:
      return {
        ...state,
        0: actions.allTickets,
      };
    case GET_CHEAP_TICKETS:
      return {
        ...state,
        0: actions.cheapTickets,
        flag: actions.flag,
      };
    case GET_FAST_TICKETS:
      return {
        ...state,
        0: actions.fastTickets,
        flag: actions.flag,
      };
    default:
      return state;
  }
};

export default reduserTickets;
