import constants from '../../constants'



export const updateArtistId = (value) => dispatch => {
  if(typeof value === 'string')
    dispatch({type:constants.UPDATE_ARTIST_ID,value:value})
  else
    dispatch({type:constants.NO_SUCH_ARTIST,value:value})
}
