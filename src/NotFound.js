import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


export default () => {
    return ( <div>
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">:(</h1>
                <p className="lead">Nothing to see here</p>
            </Container>
        </Jumbotron>
    </div>)
}