import {
  CHANGE_ALL_CHECK_ON,
  CHANGE_ALL_CHECK_OFF,
  CHANGE_ONE_CHECK_ON,
  CHANGE_MAIN_CHECK_OFF,
} from '../types/actionTypes';

// каждый ключ объекта otherCheckboxes соответствует количеству пересадок
// кроме первого ключа 0 - все пересадки

const ruducerCheckboxes = (
  state = {
    otherCheckboxes: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  actions
) => {
  switch (actions.type) {
    case CHANGE_ALL_CHECK_ON:
      return {
        ...state,
        otherCheckboxes: {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
        },
      };
    case CHANGE_ALL_CHECK_OFF:
      return {
        ...state,
        otherCheckboxes: {
          0: false,
          1: false,
          2: false,
          3: false,
          4: false,
        },
      };
    case CHANGE_ONE_CHECK_ON:
      return {
        ...state,
        otherCheckboxes: actions.arr,
      };
    case CHANGE_MAIN_CHECK_OFF:
      return {
        ...state,
        otherCheckboxes: {
          ...state.otherCheckboxes,
          0: false,
        },
      };
    default:
      return state;
  }
};

export default ruducerCheckboxes;
