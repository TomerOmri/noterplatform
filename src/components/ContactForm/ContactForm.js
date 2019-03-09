import React, { Component } from "react";
import { Consumer } from "../../Context.js";
import uuid from "uuid";
import axios from 'axios';

import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit  = async (dispatch, event) => {
    const { name, email, phone } = this.state;

    const newContact = { id: uuid(), name, email, phone };

    try {
      const postStatus = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
      dispatch({ type: "ADD_CONTACT", payload: newContact });
    } catch (e) {
      dispatch({ type: "ADD_CONTACT", payload: newContact });
    }





    this.setState({ name: "", email: "", phone: "" });
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Card>
                <CardBody>
                  <CardTitle>Add Contact</CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter name.."
                        value={name}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Enter Email.."
                        value={email}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone.."
                        value={phone}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <Button
                      color="primary"
                      size="lg"
                      block
                      onClick={this.onSubmit.bind(this, dispatch)}
                    >
                      Submit{" "}
                    </Button>{" "}
                  </Form>
                </CardBody>
              </Card>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactForm;
