import { connect as reactReduxConnect } from 'react-redux'
import { combineReducers, createStore } from 'redux' 

import reducers from './reducers'

export const configureStore = (): any => {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

  return store
}

export const connect = (mapStateToProps: any) => {
  return reactReduxConnect(mapStateToProps)
}