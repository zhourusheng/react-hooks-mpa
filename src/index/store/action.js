export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED'


export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_FROM,
    payload: to
  }
}

export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState()
    dispatch({
      type: ACTION_SET_HIGH_SPEED,
      payload: !highSpeed
    })
  }
}