import React,{ Component } from 'react'

//Redux/Router
import { updateSearch }  from '../../../store/actions/userReducer-actions/search_token'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';



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
      if (redirectToReferrer === true) {
         return   <Redirect to={`/dashboard/${this.state.input}/Overview`}  />

        }
    return(
        <div className="container-main ">
        <form onSubmit={(event) => this.inputSubmit(event)}>
          <div className="box">
            <div className="container-4">
            <input className="search-bar-nav" type="search" id="search" placeholder="Search" required  value={this.state.input}  onChange={(e) => this.inputChange(e)}/>
              <button className="icon">  <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        </div>
    )}

    inputChange(event){
        this.setState({
          input:event.target.value
        })
      }

     async inputSubmit(event){
      await this.props.updateSearch(this.state.input)
      event.preventDefault()
      await this.setState({
        redirectToReferrer:true
      })
      await window.location.reload()
    }
}


const mapDispatchToProps = (dispatch) => ({
   updateSearch: (value) => dispatch(updateSearch(value))
})


export default connect(null,mapDispatchToProps)(Searchbar)
