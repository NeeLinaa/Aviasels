import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import './index.scss';
import App from "./components/app/App";
import ruducerCheckboxes from './reducers/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = () => next => action => {
  const rez = next(action)
  return rez
}

const store = createStore(ruducerCheckboxes, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
  )));

const Index = () => (<Provider store={store}>
      <App />
    </Provider>)

ReactDOM.render(<Index />, document.getElementById('root'));
