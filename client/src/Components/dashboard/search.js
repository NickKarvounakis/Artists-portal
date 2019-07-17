import React,{ Component } from 'react'
import { connect } from 'react-redux'


//ACTIONS IMPORT
  import { updateSearch }  from '../../store/actions/search_token'
import { Redirect } from 'react-router';

  //FUNCTION THAT EXTRACTS THE VALUE FROM THE COOKIE:ACCESS_TOKEN


 class Searchbar extends Component{

   constructor(props){
     super()

     this.state = {
       input:''
     }
     this.inputChange = this.inputChange.bind(this)
     this.inputSubmit = this.inputSubmit.bind(this)
   }

   render(){
     const redirectToReferrer = this.state.redirectToReferrer;
      if (redirectToReferrer === true)
         return   <Redirect to={`/dashboard/${this.state.input}/Overview`}  />
    return(
      <div className="search-background search__container" id="section1">
          <div>
            <div className="search-background search__container" id="section1">
                <div>
                  <form onSubmit={(event) => this.inputSubmit(event)}>
                    <input className="searchBar search__input" placeholder="Search for an artist" value={this.state.input}  onChange={(e) => this.inputChange(e)} />
                  </form>
                </div>
            </div>
          </div>
      </div>
    )}

    inputChange(event){
        this.setState({
          input:event.target.value
        })
      }

    async inputSubmit(event){
      event.persist()
      await this.props.updateSearch(this.state.input)
      await event.preventDefault()
      await this.setState({
        redirectToReferrer:true
      })
      await window.location.reload()



    }
}



const mapStateToProps = (state) => {
  return{
    token:state.token,
    color:state.colorReducer.color
  }
}


const mapDispatchToProps = (dispatch) => ({
   updateSearch: (value) => dispatch(updateSearch(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Searchbar)
