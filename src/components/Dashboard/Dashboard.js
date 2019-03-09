import React from 'react';

import Clients from '../Clients/Clients.js';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar.js';

export default () => {
    return (
        <Container>

            <Row>
                <Col> <h1>Noter Dashboard</h1> </Col>
                <Col sm="2"> <Sidebar /> </Col>
            </Row>
            <Row> {' '}</Row>
            <Row>
                <Col> <Clients /> </Col>
            </Row>

        </Container>
    )
}