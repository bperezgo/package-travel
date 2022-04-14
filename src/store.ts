import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(promise, thunk, createLogger())
    : applyMiddleware(promise, thunk);
const middlewares = [middleware];

if (
  process.env.NODE_ENV === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(rootReducer, compose(...middlewares));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
