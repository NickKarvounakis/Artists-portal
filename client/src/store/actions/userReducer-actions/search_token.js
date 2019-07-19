import constants from '../../constants'

export const updateSearch = (value) => dispatch => {
  dispatch({type:constants.SEARCH_TOKEN,value:value})
}
