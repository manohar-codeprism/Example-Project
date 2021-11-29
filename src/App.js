import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Roadmap from './components/pages/Roadmap';
import Howitworks from './components/pages/Howitworks';
import Team from './components/pages/Team.js';
import WhitePaper from './components/pages/WhitePaper.js';
import Testnet from './components/pages/Testnet';
import './App.css';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/roadmap' exact component={Roadmap} />
          <Route path='/how-it-works' exact component={Howitworks} />
          <Route path='/team' exact component={Team} />
          <Route path='/white-paper' exact component={WhitePaper} />
          <Route path='/testnet' exact component={Testnet} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
