import { ERROR_HANDLING } from '../types/types';

const reducerErrorHandling = (state = false, actions) => {
  switch (actions.type) {
    case ERROR_HANDLING:
      return [actions.payload];
    default:
      return state;
  }
};

export default reducerErrorHandling;
