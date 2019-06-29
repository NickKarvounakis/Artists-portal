import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Components/Login'
import Content from './Components/index'
import Search from './Components/search'

const spotifyWebApi = new Spotify()

class App extends Component {




  render(){
    console.log('refresh--->',document.cookie)

  return (
    <div className="App">


          <Provider store={ store }>
          <Route path="/"   render={()=><Login spotifyWebApi={spotifyWebApi}/>}/>
          <Route path="/dashboard"   render={()=><Search spotifyWebApi={spotifyWebApi}/>}/>
          <Route path="/dashboard/:id"  render={(props)=><Content spotifyWebApi={spotifyWebApi} parameters={props} />}/>
          </Provider>

    </div>
)}
}

export default App;
