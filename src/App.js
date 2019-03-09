import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import ContactList from "./components/ContactList/ContactList.js";
import EditContact from "./components/EditContact/EditContact.js";
import Header from "./components/Header/Header.js";
import { Row, Col } from "reactstrap";
import { Provider } from "./Context.js";
import ContactForm from "./components/ContactForm/ContactForm.js";
import About from './About.js';
import NotFound from './NotFound.js';


class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
              <div>
           <Header branding="Contact Manager" />
           <Row />
           <div className="container">
             <Row>
               <Col sm="12" md={{ size: 6, offset: 3 }}>
                 <Switch>
                  <Route exact path="/" component={ContactList}/>
                  <Route exact path="/contact/add" component={ContactForm}/>
                  <Route exact path="/contact/edit/:id" component={EditContact}/>
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
