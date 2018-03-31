import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Sidebar,
  Button,
  Segment,
  Container,
  Responsive
} from "semantic-ui-react";

const NavbarMobile = ({ children, onPusherClick, onToggle, visible }) => (
  <Sidebar.Pushable as={Segment}>
    {/* Sidebar */}
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      visible={visible}
      inverted
      vertical
    >
      <Menu.Item as={Link} to="/" active>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/about">
        About
      </Menu.Item>
      <Menu.Item as="a">Log in</Menu.Item>
      <Menu.Item as="a">Sign Up</Menu.Item>
    </Sidebar>

    <Sidebar.Pusher dimmed={visible} onClick={onPusherClick}>
      {/* Normal Menu */}
      <Segment
        inverted
        color="purple"
        textAlign="center"
        style={{ minHeight: 70, padding: "1em 0em" }}
        vertical
      >
        <Menu
          fixed="top"
          inverted
          secondary
          size="large"
          style={{ padding: "1em 0em" }}
        >
          <Container>
            <Menu.Item onClick={onToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item position="right">
              <Button as="a" inverted>
                Log in
              </Button>
              <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavbarMobile.propTypes = {
  children: PropTypes.node.isRequired,
  onPusherClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default NavbarMobile;
