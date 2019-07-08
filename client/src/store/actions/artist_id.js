
export const updateArtistId = (value) => dispatch => {
  if(typeof value === 'string')
    dispatch({type:'UPDATE_ARTIST_ID',value:value})
  else
    dispatch({type:'NO_SUCH_ARTIST',value:true})
}
