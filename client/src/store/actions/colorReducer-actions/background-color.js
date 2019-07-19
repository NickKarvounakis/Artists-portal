import constants from '../../constants'

export const updateColor = (value) => dispatch => {
  const color = getComputedStyle(document.documentElement).getPropertyValue('--background-gradient'); // #999999
  const date = new Date()
  date.setHours(date.getHours() + 5)
  document.cookie = `color=${value}; expires=${date.toUTCString()}; path=/`
  dispatch({type:constants.CHANGE_COLOR,value:value})
}
