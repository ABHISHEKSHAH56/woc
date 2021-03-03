import React from 'react';
import Slider from "./componment/homecompo/Crousel";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './componment/homecompo/Navbar';
import Footer from './componment/homecompo/Footer';
import Batch from './componment/homecompo/Batch';
import Batchleft from './componment/homecompo/Batchleft';
import { Col, Container, Row } from 'react-bootstrap';
import Notice from './componment/homecompo/Notice';
import EventDescripiton from './componment/homecompo/EventDescripiton';
import Quicklinks from './componment/homecompo/QuickLink';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        
          <Row>
            <Col lg={8}>
            <Container>
            <Slider />

            </Container>
           
            </Col>
            <Col lg={4}>
            <Notice />
            
            </Col>
          </Row>
          <EventDescripiton />
          <Quicklinks />
        
       
        <Batch />
        <Batchleft data="2018-22" />



      <Footer />
      </Router>
    </>
  )
}

export default App;
