import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import MyTechStack from './MyTechStack';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a" exact component={About} />
          <Route path="/b" exact component={MyTechStack} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
