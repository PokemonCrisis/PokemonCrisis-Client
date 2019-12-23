import React, { Component } from 'react'
import { Navbar, Card, Row, Nav, NavDropdown, Col, Image, ButtonToolbar, Button, Overlay, OverlayTrigger, Tooltip, PopoverContent, PopoverTitle, Popover, ListGroup} from "react-bootstrap";


export default class ChallengeWindow extends Component {

    render() {
        return (
            <>

            <Col  md="auto">
              <Card className="blue-gradient challengeWindow" text="white" style={{ width: '18rem' }}>
                <Card.Header>Challenge Window</Card.Header>

                <Card.Body>
                  <Card.Title className="news-title">User Challenged you to the Battle</Card.Title>
                  <Card.Text className="news-content">
                    your Team
                  </Card.Text>
                  <Row>
                  <Col>
                  <Button variant="primary">Accept</Button>
                  </Col>
                  <Col>
                  <Button variant="primary">Reject</Button>
                  </Col>
                  </Row>
                </Card.Body>
            </Card>
            </Col>
            </>
        )
    }
}
