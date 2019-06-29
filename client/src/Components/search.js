import React,{ Component } from 'react'
import { connect } from 'react-redux'


//ACTIONS IMPORT
  import { updateSearch }  from '../store/actions/search_token'


  //FUNCTION THAT EXTRACTS THE VALUE FROM THE COOKIE:ACCESS_TOKEN
  import GetCookie from './cookie_checker'


 class Searchbar extends Component{

   constructor(props){
     super()
     props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
     this.state = {
       input:''
     }
     this.inputChange = this.inputChange.bind(this)
     this.inputSubmit = this.inputSubmit.bind(this)
   }

   render(){
    return(
      <div className="search-background search__container" id="section1">
          <div>
            <form onSubmit={(event) => this.inputSubmit(event)}>
              <input className="searchBar search__input" placeholder="Search for a video!" value={this.state.input}  onChange={(e) => this.inputChange(e)} />
            </form>
          </div>
      </div>
    )}

    inputChange(event){
        this.setState({
          input:event.target.value
        })
      }

    inputSubmit(event){
      event.preventDefault()
      this.props.updateSearch(this.state.input)
      this.setState({
        input:''
      })
    }
}



const mapStateToProps = (state) => {
  return{
    token:state.token
  }
}


const mapDispatchToProps = (dispatch) => ({
   updateSearch: (value) => dispatch(updateSearch(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Searchbar)
