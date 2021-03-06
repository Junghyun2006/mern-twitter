import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import configureStore from './store/store';

import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_utils';
import { logout } from './actions/session_actions';
import {headphoneReq} from "./util/rapid_api_utils";
import {fetchProducts} from "./actions/product_actions"

document.addEventListener('DOMContentLoaded', () => {
  let store;


  if (localStorage.jwtToken) {

    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');
  window.logout = store.dispatch(logout());
  window.headphoneReq = headphoneReq;
  window.dispatch = store.dispatch;
  window.fetchProducts = fetchProducts;

  ReactDOM.render(<Root store={store} />, root);
});