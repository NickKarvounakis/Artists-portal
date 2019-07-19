import constants from '../../constants'

export const updateUrl = (value) => dispatch => {
  dispatch({type:constants.UPDATE_TOKEN,value:value})
}
