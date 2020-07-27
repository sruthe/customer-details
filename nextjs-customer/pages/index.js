import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import App from '../components/app'
import getData from './api/hello'
import customerDetails from '../public/customer.json'

export default function render(initialState) {
    // let res = getData();
    console.log(customerDetails);
  const store = configureStore({customerDetails:customerDetails, selectedCustomer:0})
  let content =
      <Provider store={store} >
        <App />
      </Provider>
  ;
  // const preloadedState = store.getState()
  return content;
}
