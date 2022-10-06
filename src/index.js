import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import {setupListeners} from '@reduxjs/toolkit/query'


//reducers 
import counterslice from './features/counter/counterSlice'
import userslice from './features/Users/userSlice'
import cartslice from './features/cartItems/cartSlice'
import expenseslice from './features/expenseTracker/expenseSlice'
//RTK QUERY
import  { postApi } from './RTKQUERY/services/postApi'
const store = configureStore({
  reducer:{
    count:counterslice,
    users:userslice,
    items:cartslice,
    expense:expenseslice,
    [postApi.reducerPath]:postApi.reducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(postApi.middleware)  
})
setupListeners(store.dispatch)

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

 
reportWebVitals();
