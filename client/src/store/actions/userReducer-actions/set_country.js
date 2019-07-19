import constants from '../../constants'

export const set_country = (value) => dispatch => {
  dispatch({type:constants.SET_COUNTRY,value:value})
}
