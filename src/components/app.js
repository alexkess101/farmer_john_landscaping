import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './home';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';
import SubmitPage from './submit';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/submit_page" component={SubmitPage} />

        </Router>
      </div>
    );
  }
}
