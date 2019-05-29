import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './home';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Route exact path="/" component={Homepage} />

        </Router>
      </div>
    );
  }
}
