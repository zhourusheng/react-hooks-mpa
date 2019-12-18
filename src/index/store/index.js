import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(
  combineReducers(reducer),
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false
  },
  applyMiddleware(thunk)
)