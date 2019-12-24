import React, { Component } from 'react'
import { Navbar, Container, Jumbotron, Row, Nav, NavDropdown, Col, Image, ButtonToolbar, Button, Overlay, OverlayTrigger, Tooltip, PopoverContent, PopoverTitle, Popover, ListGroup} from "react-bootstrap";
import GlobalNews from './globalnews'
import MenuItems from './menuItems'
import ChallengeWindow from './challengeWindow'

export default class Dashboard extends Component {

    render() {
        return (
            <>
            <Row>

              <Col className="left-panel">
              <Row>
                <Col>
                  <MenuItems />
                  <Jumbotron fluid className="blue-gradient">
                    <Container>
                    </Container>
                  </Jumbotron>
                </Col>
                </Row>
                <Row>
                  <Col md>
                    <ChallengeWindow />
                  </Col>
                    <GlobalNews />
                    <Col xs lg="2">
                       3 of 3
                    </Col>
                </Row>
              </Col>
              <Col sm={5}>
                2 of 2
              </Col>
            </Row>
            </>
        )
    }
}
