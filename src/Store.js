import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

// Reducers.
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
