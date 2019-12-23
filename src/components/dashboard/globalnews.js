import React, { Component } from 'react'
import { Navbar, Card, Row, Nav, NavDropdown, Col, Image, ButtonToolbar, Button, Overlay, OverlayTrigger, Tooltip, PopoverContent, PopoverTitle, Popover, ListGroup} from "react-bootstrap";


export default class GlobalNews extends Component {

    render() {
        return (
            <>

            <Col  md="auto">
              <Card className="blue-gradient globalNewsSection" text="white" style={{ width: '18rem' }}>
                <Card.Header>Global News</Card.Header>
                <div className="globalNews">
                <Card.Body>
                  <Card.Title className="news-title">Dark Card Title</Card.Title>
                  <Card.Text className="news-content">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Master Psy (<span className="byAuth">Global Admin</span>)
                  </footer>
                </Card.Body><hr/>

                <Card.Body>
                  <Card.Title className="news-title">Dark Card Title</Card.Title>
                  <Card.Text className="news-content">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Master Psy (<span className="byAuth">Global Admin</span>)
                  </footer>
                </Card.Body><hr/>

                <Card.Body>
                  <Card.Title className="news-title">Dark Card Title</Card.Title>
                  <Card.Text className="news-content">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Master Psy (<span className="byAuth">Global Admin</span>)
                  </footer>
                </Card.Body><hr/>
                </div>
            </Card>
            </Col>
            </>
        )
    }
}
