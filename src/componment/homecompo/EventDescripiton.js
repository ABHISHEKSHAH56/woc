import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {  Header,Image,Segment} from 'semantic-ui-react'
import img from '../images/download.jpeg'

export default function EventDescripiton() {
        return (
                <div>




                        <Segment style={{ padding: '8em 0em' }} vertical>
                                <Container >
                                        <Row>
                                                <Col lg={8}>
                                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                                                We Help Companies and Companions
                                                         </Header>
                                                        <p style={{ fontSize: '1.33em' }}>
                                                                We can give your company superpowers to do things that they never thought possible.
                                                                Let us delight your customers and empower your needs... through pure data analytics.
                                                        </p>
                                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                                                We Make Bananas That Can Dance
                                                         </Header>
                                                        <p style={{ fontSize: '1.33em' }}>
                                                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                                                bioengineered.
                                                         </p>

                                                         <Header as='h3' style={{ fontSize: '2em' }}>
                                                                We Make Bananas That Can Dance
                                                         </Header>
                                                        <p style={{ fontSize: '1.33em' }}>
                                                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                                                bioengineered.
                                                         </p>
                                                </Col>
                                                <Col floated='right' lg={4}>
                                                        <Image bordered rounded size='large' width="100%" height="250px" src={img} />
                                                </Col>
                                        </Row>
                                       
                                </Container>
                        </Segment>
                </div>
        )
}
