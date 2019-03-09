import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";


class Clients extends Component {

    render() {

        const clients = [
            {id: 1, firstName: "Tomer", lastName: "Omri", email: "tomeromrix@gmail.com", phone: "98237489", balance: 50},
            {id: 2, firstName: "Karen", lastName: "Filiremeni", email: "k@gmail.com", phone: "0293114", balance: 20}
        ];

        if (clients) {
            return (<div>
                         <h4>Clients list</h4>
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
            return (<div> Loading.. </div>)
        }
    }
}

export default Clients;