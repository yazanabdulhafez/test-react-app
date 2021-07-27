import React from 'react';
import './App.css';
import Header from './components/header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CONTACT from './components/contact';
import ABOUTUS from './components/about-us';
import HOME from './components/home';

function App() {
  return (
    <React.Fragment>

      <Router>

        <Header />

        <Switch>
        <Route path="/" exact component={HOME} />
          <Route path="/contact" component={CONTACT} />
          <Route path="/about" component={ABOUTUS} />
          
        </Switch>


      </Router>
    </React.Fragment>

  );
}

export default App;