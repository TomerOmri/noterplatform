import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context.js";
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class Contact extends Component {
  constructor() {
    super();
    this.state = { showContactInfo: false };
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (dispatch, id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( () => { dispatch({ type: "DELETE_CONTACT", payload: id }) });
  };
  onEditClick = (dispatch, id) => {
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="container">
              <ListGroupItem>
                <ListGroupItemHeading>
                  {contact.name}{" "}
                  <i
                    onClick={() => {
                      this.onShowClick();
                    }}
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer", color: "black" }}
                  />
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      this.onDeleteClick(value.dispatch, contact.id);
                    }}
                    style={{ cursor: "pointer", float: "right", color: "red", margin: '5px' }}
                  />
                  <Link to={`/contact/edit/${contact.id}`} >
                    <i
                        className="fas fa-edit"
                        style={{ cursor: "pointer", float: "right" , margin: '5px'}}
                    />
                  </Link>

                </ListGroupItemHeading>
              </ListGroupItem>
              {showContactInfo ? (
                <div>
                  {" "}
                  <ListGroupItem>
                    <ListGroupItemHeading />
                    <ListGroupItemText>
                      <ul>
                        <li>{contact.phone}</li>
                        <li>{contact.email}</li>
                      </ul>
                    </ListGroupItemText>
                  </ListGroupItem>
                </div>
              ) : (
                <div />
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
