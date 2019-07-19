import constants from '../constants'

const initialState = {
  token:'',
  user_id:'',
  search_result:'',
  artist_id:'',
  country:''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.UPDATE_ID:
        return Object.assign({}, state, {User_id: action.value})
      case constants.UPDATE_TOKEN:
         return Object.assign({}, state, {token: action.value})
       case constants.SEARCH_TOKEN:
          return Object.assign({}, state, {search_result: action.value})
        case constants.UPDATE_ARTIST_ID:
          return Object.assign({}, state, {artist_id: action.value})
        case constants.SET_COUNTRY:
          return Object.assign({}, state, {country: action.value})
      default:
        return state
    }
}

export default userReducer;
