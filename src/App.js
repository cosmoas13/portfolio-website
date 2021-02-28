import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Service from './components/Common/Services';
import Team from './components/Common/Team';
import Portfolio from './components/Common/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Service} />
          <Route path="/team" component={Team} />
          <Route path="/portfolio" component={Portfolio} />
          Portfolio
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
