import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header/Header.js";
import { Row, Col } from "reactstrap";
import { Provider } from "./Context.js";
import About from './About.js';
import NotFound from './NotFound.js';

import Dashboard from './components/Dashboard/Dashboard.js';


class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
              <div>
           <Header branding="Noter Platform" />
           <div className="container">
             <Row>
               <Col>
                 <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/about" component={About}/>
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
