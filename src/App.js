import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Work from './components/Work/Work.js'
import NotFound from './components/NotFound/NotFound.js'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/work" component={Work}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
