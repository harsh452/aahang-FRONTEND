import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './store'
import { compose,applyMiddleware, createStore } from 'redux';
import {Provider} from "react-redux"
import thunk from "redux-thunk" 
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';


// store.subscribe(() => console.log(store.getState()));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
  ));



ReactDOM.render(
  
    <Provider store = {store}>
    <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
