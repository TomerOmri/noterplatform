import React, {Component} from 'react';
import { Table, Button, Spinner, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";



class Clients extends Component {
    state = { totalOwed: null };

    static getDerivedStateFromProps(props, state) {
        const { clients } = props;

        if (clients) {
            const total = clients.reduce( (total, client) => {
                return total + parseFloat(client.balance.toString());
            }, 0);

            return { totalOwed: total}
        }

        return null;
    }

    render() {
        const {clients} = this.props;
        const {totalOwed} = this.state;

        if (clients) {
            return (
                <div>
                <Row>
                    <Col>  <h4>Clients list</h4> </Col>
                    <Col sm="2">  <h5 className="text-right text-secondary"> Total Owed{' '}
                            <span className="text-primary"> ${parseFloat(totalOwed).toFixed(2)} </span> </h5>
                    </Col>
                </Row>
                <Table hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map( (client, index) => {
                        return(
                            <tr key={client.id}>
                                <th scope="row">{index+1}</th>
                                <td>{client.firstName}</td>
                                <td>{client.lastName}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>{client.balance}</td>
                                <td>
                                    <Link to={`/client/${client.id}`}> <Button color="info" size="sm" outline><i className="fas fa-info" /> Info</Button>{' '} </Link>
                                    <Button color="primary" size="sm" outline><i className="fas fa-edit" /> Edit</Button>{' '}
                                    <Button color="danger" size="sm" outline><i className="fas fa-trash" /> </Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>


                    </div>)
        } else {
            return (<div> <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />{' '}
            </div>)
        }
    }
}

export default compose(
    firestoreConnect([{ collection: 'client' }]),
    connect((state, props) => ({ clients: state.firestore.ordered.client })))(Clients);