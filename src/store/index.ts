import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import api from './middlewares/api';

const enhancer = applyMiddleware(thunk, api);

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(reducer, {}, composeEnhancers(enhancer));

export type RootState = ReturnType<typeof reducer>;
export default store;
