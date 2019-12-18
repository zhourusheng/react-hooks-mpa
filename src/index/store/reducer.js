import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_HIGH_SPEED,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_DEPART_DATE
} from './action'

export default {
  from(state='北京', action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_FROM:
        return payload    
      default:
        break
    }
    return state
  },
  to(state='上海', action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TO:
        return payload
      default:
        break
    }
    return state
  },
  isCitySelectorVisible(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return payload
      default:
        break
    }
    return state
  },
  currentSelectingLeftCity(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
        return payload
      default:
        break
    }
    return state
  },
  cityData(state=null, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
        break
    }
    return state
  },
  isLoadingCityData(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_LOADING_CITY_DATA:
        return payload
      default:
        break
    }
    return state
  },
  isDateSelectorVisible(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
        return payload
      default:
        break
    }
    return state
  },
  departDate(state=Date.now(), action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_DEPART_DATE:
        return payload
      default:
        break
    }
    return state
  },
  highSpeed(state=false, action) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_HIGH_SPEED:
        return payload    
      default:
        break
    }
    return state
  },
}