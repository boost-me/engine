import { connect as reactReduxConnect } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers'

export const configureStore = (): any => {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(),
  ));

  return store
}

export const connect = (mapStateToProps: any) => {
  return reactReduxConnect(mapStateToProps)
}