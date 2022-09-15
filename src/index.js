import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
//reducers 
import counterslice from './features/counter/counterSlice'
import userslice from './features/Users/userSlice'
const store = configureStore({
  reducer:{
    count:counterslice,
    users:userslice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

 
reportWebVitals();
