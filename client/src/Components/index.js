import React, { Component } from 'react';

import { connect } from 'react-redux'

import Navbar from './navbar/navbar'

  import { updateSearch }  from '../store/actions/search_token'


import ContentHeader from './mainContent/header/header'
import ContentBody from './mainContent/body/body'
import Footer from './mainContent/footer/Footer'

//METHODS
//FUNCTION THAT EXTRACTS THE VALUE FROM THE COOKIE:ACCESS_TOKEN
import GetCookie from './cookie_checker'


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
    await setTimeout(() => {
        console.log('loading...')
    },1000)
    const header = await <ContentHeader spotifyWebApi={this.props.spotifyWebApi} />
    const body = await  <ContentBody spotifyWebApi={this.props.spotifyWebApi} />
      this.setState({
        header:header,
        body:body
      })


  }


  render(){

    let query = this.props.parameters.match.params.id
    if(!this.props.search_result){
      this.props.updateSearch(query)
      this.props.spotifyWebApi.setAccessToken(GetCookie('access_token'))
    }
    // const path = `/#access_token=${this.props.token.access_token}&refresh_token=${this.props.token.refresh_token}+`
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
        <Navbar spotifyWebApi={this.props.spotifyWebApi}/>
        {content}
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
