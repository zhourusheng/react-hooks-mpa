import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_HIGH_SPEED
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