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

class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;

        this.setState({name: contact.name, email: contact.email, phone: contact.phone, id: id});
    }


    onChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    onSubmit  = async (dispatch, event) => {
        const { name, email, phone, id } = this.state;

        const updatedContact = { id: id, name, email, phone };

        try {
            const postStatus = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);
            dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
        } catch (e) {
            dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
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
                                    <CardTitle>Edit Contact</CardTitle>
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
                                            Done Editing{" "}
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

export default EditContact;
