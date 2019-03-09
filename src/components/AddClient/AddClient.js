import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { compose } from "redux";
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: ''
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { state, props: { firestore, history } } = this;

        const newClient = {
            ...state,
            balance: state.balance === '' ? '0' : state.balance
        };

        firestore.add({ collection: 'client' }, newClient).then(() => history.push('/'))

    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>

                <FormGroup>
                    <Row>
                        <Col>
                            <Label for="firstName">First Name</Label>
                            <Input name="firstName" id="firstName" placeholder="Client first name"
                                   onChange={this.onChange} value={this.state.firstName}/>
                        </Col>
                        <Col>
                            <Label for="lastName">Last Name</Label>
                            <Input name="lastName" id="lastName" placeholder="Client last name"
                            onChange={this.onChange} value={this.state.lastName}/>
                        </Col>
                    </Row>

                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Client email"
                                   onChange={this.onChange} value={this.state.email}/>
                        </Col>
                        <Col>
                            <Label for="phone">Phone</Label>
                            <Input name="phone" id="phone" placeholder="Client phone"
                                   onChange={this.onChange} value={this.state.phone}/>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row>
                        <Col>
                            <Label for="email">Balance</Label>
                            <Input type="number" name="balance" id="balance"
                                   onChange={this.onChange} value={this.state.balance}/>
                        </Col>
                    </Row>
                </FormGroup>


                <Button color="primary" size="lg" block>Add Client</Button>
            </Form>
        );
    }
}

export default firestoreConnect()(AddClient);