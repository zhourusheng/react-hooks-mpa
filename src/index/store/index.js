import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(
  combineReducers(reducer),
  {
    from: '北京'
  },
  applyMiddleware(thunk)
)