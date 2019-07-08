const initialState = {
  color:'',
  warning:false
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return Object.assign({}, state, {color: action.value})
      case 'NO_SUCH_ARTIST':
        return Object.assign({}, state, {warning: true})
      default:
        return state
    }
}

export default colorReducer;
