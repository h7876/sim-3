import React, { Component } from 'react';
import './App.css';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <HashRouter>
          <Switch>
            <Route path= '/' component = {Auth} exact/>
            <Route path= '/dashboard' component = {Dashboard} />
            <Route path= '/post/:postid' component = {Post} />
            <Route path = '/new' component = {Form} />
      
          </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
