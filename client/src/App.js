import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js'
import store from './store'
import { Provider } from 'react-redux'

import Login from './Components/Login'

import Body from './Components/Body'


const spotifyWebApi = new Spotify()

class App extends Component {




  render(){
  return (
    <div className="App">


          <Provider store={ store }>
          <Login spotifyWebApi={spotifyWebApi} />
          <Body spotifyWebApi={spotifyWebApi} />
          </Provider>

    </div>
)}
}

export default App;
