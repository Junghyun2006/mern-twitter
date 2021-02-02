import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import products from './products_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  tweets,
  products
});

export default RootReducer;