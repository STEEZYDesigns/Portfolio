import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './GlobalFooter.css';

export class GlobalFooter extends Component {

    render() {
        return(
            <Container fluid>
                <footer id="GlobalFooter">
                    <Row id="FooterBody"> {/* black background, different color font */}
                        <Col sm={4} id="FooterWebLinks" >
                            Home, About Me, Ceramics/Glass/Art, Send Me Feedbacks, Catalouge Sign-Up, Suggested
                            {/* Vertical List of anchor tags, styled in bootstrap */}
                        </Col>

                        <Col sm={4} id="EmptyCol">
                        </Col>

                        <Col sm={4} id="FooterLogoandLinks">
                            <div id="JOMGlogo">
                                <img src="../../public/JOMGLogo_byJOMG" alt="JOMG_Logo" /> {/* my logo on the middle-right of the footer */}
                            </div>
                            <div id="FooterSocialLinks">
                            {/* Should be a box div, with icon links with social media logos */}
                            </div>
                        </Col>
                    </Row>

                    <Row id="FooterTOS">
                        <div id="P_S">
                            TO BE ADDED WHEN I UNDERSTAND LEGAL POLICY
                            <a> Terms of Sale </a> 
                            <a> Terms of Use </a>
                            <a> Privacy Policy </a>
                        </div>
                    </Row>
                </footer>
            </Container>
        )
    }
}

export default GlobalFooter;