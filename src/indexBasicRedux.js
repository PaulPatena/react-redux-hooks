import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// ACTION - describes what you want to do
const increment = () => { // plain syntax
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => ({ // shorthand syntax
    type: 'DECREMENT'
})

// REDUCER - describes how your action transform your store based on action
// state = 0 is the initial value for your store
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state += 1;
    case 'DECREMENT': return state -= 1;
    default: return state; // return the original state
  }
}

// STORE - global state, normally you have multiple reducers that needs combining
let store = createStore(counter);

// Display store changes
store.subscribe(() => console.log(store.getState()));

// DISPATCH - trigger an actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
