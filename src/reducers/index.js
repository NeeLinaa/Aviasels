import {combineReducers} from 'redux';
import ruducerCheckboxes from './ruducerCheckboxes';
import reduserTickets from './reducerTickets';

const allReducers = combineReducers({
    checkboxes: ruducerCheckboxes,
    ticketsArr: reduserTickets
})

export default allReducers;