import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root')
);

