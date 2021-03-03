import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Feed } from 'semantic-ui-react'
import a from '../images/job.svg';
import b from '../images/mentor.svg' ;
import ck from '../images/chapter.svg';
import d from '../images/event.svg' ;
import { Link } from 'react-router-dom';
import '../extra/QuickLinks.css'

export default function Quicklinks() {
        return (
                <Container className="Linksec">
                        <div className="header">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                     </div>
                        <Container >
                                <Row className="service">
                                        
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                        <div className="first"> 
                                                <Link to="/second">
                                                <Card className="cardk"  style={{ width: '16rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img alt=' okay' src={a} className="m-1" width='100px' height='80px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 fw-bold align-self-center">Job</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                                
                                                
                                        </div>
                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                                
                                        <div className="first">
                                                 <Link to="/comingsoon">
                                                <Card  className="cardk" style={{ width: '16rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img alt=' okay' src={b} className="m-1" width='100px' height='100px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 fw-bold align-self-center">Mentor </Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                        

                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                        <div className="first"> <Link to="/comingsoon">
                                                <Card className="cardk" style={{ width: '16rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img alt=' okay' src={ck} className="m-1" width='100px' height='100px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 fw-bold align-self-center">chapter</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                                
                                        </Col>
                                         <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                         <div className="first">
                                                  <Link to="/comingsoon">
                                                <Card className="cardk" style={{ width: '16rem' }}>
                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                <Feed>
                                                                        <Feed.Label>
                                                                                <img alt=' okay' src={d}  width='100px' height='100px' />
                                                                        </Feed.Label>
                                                                </Feed>
                                                                <Card.Title className=" mt-6 fw-bold align-self-center"> Event</Card.Title>
                                                        </Card.Text>
                                                        <Card.Body>
                                                               
                                                                <Card.Text>
                                                                        Some quick example text to build on the card title and make up the bulk
                                                                        of the card's content.
                                                        </Card.Text>
                                                        </Card.Body>
                                                </Card> </Link>
                                        </div>
                                                
                                        </Col>       
                                </Row>
                               
                        </Container>

                </Container>

        )
}

