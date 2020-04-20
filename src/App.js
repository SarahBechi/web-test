import React, { Component } from 'react';
import Users from './users';
import Comments from './comments';
import Posts from './posts';
import './App.css'
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  state = {}



  render() {
    return (
      <Router>

        <Route exact path="/" component={Users} />
        <Route path="/comments" component={Comments} />
        <Route path="/posts" component={Posts} />

      </Router>





    );
  }
}

export default App;