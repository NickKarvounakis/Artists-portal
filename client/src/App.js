import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Login from './Components/Login'
import Content from './Components/index'
import Search from './Components/search'
import Error from './Components/Error'

//FUNCTION THAT PICKS ONE RANDOM COLOR FROM THE COLORS.JSON FILE
import Random_color from './Components/Methods/random_color'

const spotifyWebApi = new Spotify()



class App extends Component {




  render(){
    console.log('refresh--->',document.cookie)
    document.documentElement.style.setProperty('--background-gradient',Random_color()); //changes the background color
  return (
    <div className="App">


          <Provider store={ store }>
            <Route exact path="/"   render={()=><Login spotifyWebApi={spotifyWebApi}/>}/>
            <Route exact path="/dashboard"   render={()=><Search spotifyWebApi={spotifyWebApi}/>}/>
            <Route path="/dashboard/:id"  render={(props)=><Content spotifyWebApi={spotifyWebApi} parameters={props} />}/>


      </Provider>

    </div>
)}
}

export default App;
