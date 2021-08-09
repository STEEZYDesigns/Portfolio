import React, { Component } from 'react';
import './GlobalHeader.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export class GlobalHeader extends Component {

    render() {
        return(
            // remember to change Container's style to remove padding, white space on left and right of Header
            <Container fluid> 
                <header id="GlobalHeader"> 

                    <Row id="CompanyHeader1" className="text-center text-dark bg-light" >
                    {/* <div id="Menu">
                            <Button>
                                <Image id="MenuLogo" src="" />
                            </Button>
                        </div> */}
                        <div id="CoName">
                            JOEOMGWORKS {/* A whitespace that allows a break b/w the browser and my page
                            Remember to put spacing between characters in css. Add a slight black border to the top */}
                        </div>
                    </Row>

                    <Row id="CompanyHeader2" className="" >
                    <Col id="HeaderBody1" className="" sm={3} > {/* Add merry-go-round here to background with my own art */}
                        <Image id="HeaderLogo" src={require("./WebsiteImages/JOMGLogo.png")} rounded /> 
                        {/* logo to go on the middle-left side of the header */}
                    </Col>

                    <Col sm={6} className="emptyColumn">
                    </Col>

                    <Col sm id="HeaderBody2" className="" >
                        <Row id="Searchbar" className="" >
                            <label>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" id="button-addon1">
                                    <img src="https://img.icons8.com/material-outlined/24/000000/search--v2.png"/>
                                </Button>
                                <FormControl aria-label="Searchbar for my database" aria-describedby="DBSearchbar" />
                            </InputGroup>
                            </label>
                        </Row>
                        <Row id="I_U_D" className="">
                                <a id="IconUseDisclosure" href="https://icons8.com/icon/g5fRe5vP997x/search-more">Search More icon by Icons8</a>
                        </Row>
                    </Col>
                    </Row>

                </header>
            </Container>
        )
    }
}

export default GlobalHeader;











// import React, { Component } from 'react';
// import './GlobalHeader.css';


// export class GlobalHeader extends Component {

//     render() {
//         return(
//             <Container fluid>
//                 <header id="GlobalHeader"> 
//                     <Row> 
//                         <div id="CoName">
//                         JOEOMGWORKS {/* A whitespace that allows a break b/w the browser and my page
//                         Remember to put spacing between characters in css. Add a slight black border to the top */}
//                         </div>
//                     </Row>
//                     <Row>
//                     <div id="HeaderBody"> {/* Add merry-go-round here to background with my own art */}
//                     <div id="JOMGlogo">
//                         <Image src="../../public/JOMGLogo_byJOMG" rounded/> {/* logo to go on the middle-left side of the header */}
//                     </div>
//                         <div id="Searchbar">
//                             {/* <Searchbar /> */}
//                         </div>
//                     </div>
//                     </Row>
//                 </header>
//             </Container>
//         )
//     }
// }

// export default GlobalHeader;