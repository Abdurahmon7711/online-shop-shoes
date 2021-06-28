import React from 'react';
import { CardBody, CardFooter, Col, Container, Row, Card } from 'reactstrap';
import sniker1 from '../images/img4.png';
import sniker2 from '../images/img3.png';
import sniker3 from '../images/img2.png';
import sniker4 from '../images/img1.png';

const Trending = () => {
    return (
        <div className="collection">
            <Container className="container">

                <Row>
                    <Col className="collactionCol" md="12">
                        <p>TOP PRODUCTS</p>
                        <h4>Trending This Week</h4>
                    </Col>
                </Row>

                <Row className="row">
                    <Col className="card__area">
                        <Row>
                            <Col className="cards" md="4" lg="3">
                                <Card className="card">
                                    <CardBody className="card-body">
                                        <img src={sniker1} alt="sniker1" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="card__text">
                                            <p>Nike Area Forse</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" md="6" lg="3">
                                <Card>
                                    <CardBody className="card__body">
                                        <img src={sniker2} alt="sniker2" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="card__text">
                                            <p>Nike Area Forse</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" md="6" lg="3">
                                <Card>
                                    <CardBody className="card__body">
                                        <img src={sniker3} alt="sniker3" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="card__text">
                                            <p>Nike Area Forse</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" md="6" lg="3">
                                <Card>
                                    <CardBody className="card__body">
                                        <img src={sniker4} alt="sniker4" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="card__text">
                                            <p>Nike Area Forse</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>

                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="row">
                <Col className="card__area">
                    <Row>
                        <Col className="cards" md="4" lg="3">
                            <Card className="card">
                                <CardBody className="card-body">
                                    <img src={sniker1} alt="sniker1" />
                                </CardBody>
                                <CardFooter>
                                    <div className="card__text">
                                        <p>Nike Area Forse</p>
                                        <span>$99</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>

                        <Col className="cards" md="6" lg="3">
                            <Card>
                                <CardBody className="card__body">
                                    <img src={sniker2} alt="sniker2" />
                                </CardBody>
                                <CardFooter>
                                    <div className="card__text">
                                        <p>Nike Area Forse</p>
                                        <span>$99</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col className="cards" md="6" lg="3">
                            <Card>
                                <CardBody className="card__body">
                                    <img src={sniker3} alt="sniker3" />
                                </CardBody>
                                <CardFooter>
                                    <div className="card__text">
                                        <p>Nike Area Forse</p>
                                        <span>$99</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col className="cards" md="6" lg="3">
                            <Card>
                                <CardBody className="card__body">
                                    <img src={sniker4} alt="sniker4" />
                                </CardBody>
                                <CardFooter>
                                    <div className="card__text">
                                        <p>Nike Area Forse</p>
                                        <span>$99</span>
                                    </div>
                                </CardFooter>

                            </Card>
                        </Col>
                    </Row>
                </Col>
                 
            </Row>
            </Container>
        </div>
    );
};


export default Trending;