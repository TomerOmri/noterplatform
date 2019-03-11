import React, { Component } from 'react';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import { connect } from 'react-redux';
import { Spinner, Jumbotron, Container, Row, Col, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import {Link} from "react-router-dom";


class ClientDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteModal: false
        };
        this.deleteToggle = this.deleteToggle.bind(this);
    }

    deleteToggle() {
        this.setState(prevState => ({
            deleteModal: !prevState.deleteModal
        }));
    }

    render(){
        const { client } = this.props;

        if (client) {
            return(
                <div>
                    <Row>
                        <Col>
                            <Link to="/"> <i className="fas fa-arrow-circle-left" /> Back to Dashboard </Link>
                        </Col>
                        <Col sm="1">
                            <ButtonGroup size="sm">
                                <Button color="danger" onClick={this.deleteToggle}>Delete</Button>
                                <Modal isOpen={this.state.deleteModal} toggle={this.deleteToggle} className={this.props.className}>
                                    <ModalHeader toggle={this.deleteToggle}>Delete Client - Warning</ModalHeader>
                                    <ModalBody>
                                        You are about to delete {client.firstName} {client.lastName} from the records, Are you sure?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={this.deleteToggle}>Delete</Button>{' '}
                                        <Button color="secondary" onClick={this.deleteToggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                                <Button >Edit</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>

                    <div>
                        <Row>
                            <Col>
                                <h1 className="display-3">{client.firstName} {client.lastName}</h1>
                            </Col>

                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <h5 className="text-secondary"> Client ID: {' '}
                                    <span className="text-dark"> {client.id} </span> </h5>
                                <h5>Contact Email: {client.email} </h5>
                                <h5>Contact Phone: {client.phone} </h5>
                            </Col>
                            <Col sm="2">  <h5 className="text-right text-secondary"> Balance{' '}
                                <span className="text-danger"> ${parseFloat(client.balance).toFixed(2)} </span> </h5>
                            </Col>
                        </Row>
                    </div>
                </div>)
        } else {
            return(<Spinner />)
        }
    }
}


export default compose(
    firestoreConnect(props => [{ collection: 'client' , storeAs: 'client', doc: props.match.params.id}]),
    connect(({ firestore: { ordered }}, props) => ({
        client: ordered.client && ordered.client[0]})
    ))(ClientDetails);
