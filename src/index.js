import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import './index.scss';
import App from '././components/app/App';
import ruducerCheckboxes from './reducers/index'



const store = createStore(ruducerCheckboxes);

const Index = () => {
    return (<Provider store={store}>
      <App />
    </Provider>)
}

ReactDOM.render(<Index />, document.getElementById('root'));
