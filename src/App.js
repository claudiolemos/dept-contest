import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/work"></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
