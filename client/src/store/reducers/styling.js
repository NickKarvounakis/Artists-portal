import constants from '../constants'

const initialState = {
  color:'',
  warning:false
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.CHANGE_COLOR:
        return Object.assign({}, state, {color: action.value})
      case constants.NO_SUCH_ARTIST:
        return Object.assign({}, state, {warning: action.value})
      default:
        return state
    }
}

export default colorReducer;
