import React, { Component } from 'react';
import './HomeBody.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

class HomeBody extends Component {

render() {
    return (
            <Container fluid> {/*  My masterpiece ceramics, art, photos, and animations. perhaps some text slike steve */}
            <Row id="HomeBody" className="" >
                    <div id="WelcomeSign"> {/* may have text animation */}
                        Welcome to STEEZY Designs! {/* Default Text without animation */}
                    </div>
                    <span class="blinking-cursor">|</span>
            </Row>
        </Container>
    )
}
}

export default HomeBody;