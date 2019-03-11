import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from './store.js';


import "./App.css";
import Header from "./components/Header/Header.js";
import { Row, Col } from "reactstrap";
import About from './About.js';
import NotFound from './NotFound.js';
import AddClient from './components/AddClient/AddClient.js';
import ClientDetails from './components/ClientDetails/ClientDetails.js';

import Dashboard from './components/Dashboard/Dashboard.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <div>
           <Header branding="Noter Platform" />
           <div className="container">
             <Row>
               <Col>
                 <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/client/add" component={AddClient}/>
                  <Route exact path='/client/:id' component={ClientDetails}/>
                  <Route component={NotFound}/>
                 </Switch>
               </Col>
             </Row>
           </div>
         </div>
       </Router>
      </Provider>
    );
  }
}

export default App;
