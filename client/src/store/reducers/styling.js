const initialState = {
  color:''
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return Object.assign({}, state, {color: action.value})
      default:
        return state
    }
}

export default colorReducer;
