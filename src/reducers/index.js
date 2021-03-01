import {combineReducers} from 'redux';
import ruducerCheckboxes from './ruducerCheckboxes';
import reduserTickets from './reducerTickets';
import reducerErrorHandling from './reducerErrorHandling';

const allReducers = combineReducers({
    checkboxes: ruducerCheckboxes,
    ticketsArr: reduserTickets,
    error: reducerErrorHandling
})

export default allReducers;