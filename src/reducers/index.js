import {combineReducers} from 'redux';
import ruducerCheckboxes from './ruducerCheckboxes';

const allReducers = combineReducers({
    checkboxes: ruducerCheckboxes
})

export default allReducers;