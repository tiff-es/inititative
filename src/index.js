import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, ReactReduxContext } from "react-redux";
import  configureStore, {history} from "./redux/store";
// import {actions} from "./redux/reducers/contentful";


const store = configureStore()
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider  store={store}>

      <App  context={ReactReduxContext} history={history}/>
  </Provider>,
  rootElement
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// v
// branch --set-upstream-to=origin/https://github.com/boostinwrx/inititative.git/           main
