
//React/React-router/redux
import { Route,Switch} from "react-router-dom";
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSearch }  from '../store/actions/userReducer-actions/search_token'

//Components
import Navbar from './navbar/navbar'
import ContentHeader from './mainContent/header/header'
import ContentBody from './mainContent/body/body'
import Footer from './mainContent/footer/Footer'
import Error from './Error-route/Error'

//METHODS
//FUNCTION THAT EXTRACTS THE VALUE FROM THE COOKIE:ACCESS_TOKEN
import GetCookie from './Methods/cookie_checker'


class Content extends Component {


  constructor(){
    super()
    this.state = {
      header:null,
      body:null
    }
  }



  // ASURES BODY IS FETCHED RIGHT AFTER HEADER IS FETCHED
  async componentDidMount(){
  const header = await <ContentHeader spotifyWebApi={this.props.spotifyWebApi} />
  const body = await  <ContentBody spotifyWebApi={this.props.spotifyWebApi} />
  await this.setState({
        header:header,
        body:body
      })
  }


  render(){
    if(GetCookie('color'))
      document.documentElement.style.setProperty('--background-gradient',GetCookie('color'));
    else {
      document.documentElement.style.setProperty('--background-gradient','crimson');
    }
    let query = this.props.parameters.match.params.id
    if(!this.props.search_result){
      this.props.updateSearch(query)
      this.props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
    }

    const token_cookie = GetCookie('access_token')
    let content
    if(token_cookie){
      content =
      <div className="content">
        {this.state.header}
        {this.state.body}
        <Footer />
      </div>
  }
    else {
      content = <h1>Please sign in first</h1>
    }
  return (
      <div className="App">
        <Switch>
          <Route path='/dashboard/:id/:section'render={(props)=> <section> <Navbar spotifyWebApi={this.props.spotifyWebApi}/> {content} </section>       } />
          <Route component={Error} />
        </Switch>
      </div>
)}
}

const mapStateToProps = (state) => {
  return{
    token:state.userReducer.token,
    search_result:state.userReducer.search_result
  }
}

const mapDispatchToProps = (dispatch) => ({
   updateSearch: (value) => dispatch(updateSearch(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Content);
