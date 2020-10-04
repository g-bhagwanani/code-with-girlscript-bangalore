import React from 'react';
import './Home.css';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';

function Home () {
    return (
        <div className="home">
            <div className="main-container">
                <div className="flex-child">
                    <Container>
                        <Row sm="3" className="justify-content-around">
                            <Col>
                                <Button>Add new Patient</Button>
                            </Col>
                            <Col>
                                <Button>View Patients</Button>
                            </Col>
                            <Col>
                                <Button>Update a Patient's Details</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="flex-child">
                    <Container>
                        <Row sm="3" className="justify-content-around">
                            <Col>
                                <Jumbotron>
                                    <h3 className="display-5">Patients admitted today</h3>
                                    <p className="lead">13</p>
                                </Jumbotron>
                            </Col>
                            <Col>
                                <Jumbotron>
                                    <h3 className="display-5">Patients discharged today</h3>
                                    <p className="lead">21</p>
                                </Jumbotron>
                            </Col>
                            <Col>
                                <Jumbotron>
                                    <h3 className="display-5">Patients admitted currently</h3>
                                    <p className="lead">86</p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Home