import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js'
import store from './store'
import { Provider } from 'react-redux'
import { Route, Switch } from "react-router-dom";

import Homepage from './Components/Homepage/Homepage'
import Content from './Components/index'
import Dashboard from './Components/dashboard/dashboard'
import Error from './Components/Error-route/Error'



const spotifyWebApi = new Spotify()


class App extends Component {

  render(){
  return (
    <div className="App">
          <Provider store={ store }>
            <Switch>
              <Route exact path="/"   render={()=><Homepage spotifyWebApi={spotifyWebApi}/>}/>
              <Route exact path="/dashboard"   render={()=><Dashboard spotifyWebApi={spotifyWebApi}/>}/>]
              <Route path="/dashboard/:id"  render={(props)=><Content spotifyWebApi={spotifyWebApi} parameters={props} />}/>
              <Route component={Error}/>
            </Switch>
      </Provider>
    </div>
)}
}

export default App;
