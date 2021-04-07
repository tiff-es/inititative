import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import  {configureStore} from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import {actions} from "./redux/reducers/contentful";

export const store = configureStore
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider  store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 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


// branch --set-upstream-to=origin/https://github.com/boostinwrx/inititative.git/           main
