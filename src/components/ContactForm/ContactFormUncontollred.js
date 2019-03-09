// this is uncontrolled component, with no state but we still can keep and send input data using refs

import React, { Component } from "react";
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

  onSubmit = event => {
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;

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
              <Button color="primary" size="lg" block onClick={this.onSubmit}>
                Submit{" "}
              </Button>{" "}
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ContactForm;
