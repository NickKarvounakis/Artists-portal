const initialState = {
  token:'',
  user_id:'',
  search_result:'',
  artist_id:'',
  country:''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_ID':
        return Object.assign({}, state, {User_id: action.value})
      case 'UPDATE_TOKEN':
         return Object.assign({}, state, {token: action.value})
       case 'SEARCH_TOKEN':
          return Object.assign({}, state, {search_result: action.value})
        case 'UPDATE_ARTIST_ID':
          return Object.assign({}, state, {artist_id: action.value})
        case 'SET_COUNTRY':
          return Object.assign({}, state, {country: action.value})
      default:
        return state
    }
}

export default userReducer;
