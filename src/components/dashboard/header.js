import React, { Component } from 'react'
import { Navbar,Row, Nav, NavDropdown, Col, Image, ButtonToolbar, Button, Overlay, OverlayTrigger, Tooltip, PopoverContent, PopoverTitle, Popover, ListGroup} from "react-bootstrap";


const UserAvatar = () => (
  <Col xs={8} md={6}>
      <Image src={require("../../assets/img/default_avatar.png")} thumbnail />
  </Col>
);

const UserSettings = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">User Settings</Popover.Title>
    <Popover.Content>
    <ListGroup>
      <ListGroup.Item><UserAvatar /> <Col xs={10} md={8}>Change Avatar</Col></ListGroup.Item>
      <ListGroup.Item><a href="">Logout</a></ListGroup.Item>
    </ListGroup>
    </Popover.Content>
  </Popover>
);



const User = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={UserSettings}>
    <Button className="user">Master Psy
    </Button>
  </OverlayTrigger>
);

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="lg" className="blue-gradient" variant="dark">
              <Navbar.Brand href="#home">PokemonCrisis</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                <Navbar.Text>
                  Welcome: <User />
                </Navbar.Text>
                <Col xs={3} md={1}>
                <Image className="user-avatar" src={require("../../assets/img/default_avatar.png")} roundedCircle />
                </Col>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}
