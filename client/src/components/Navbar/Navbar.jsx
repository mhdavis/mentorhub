import React from "react";
import { Button, Container, Menu, Segment } from "semantic-ui-react";

const Navbar = ({ activeItem }) => (
  <Segment>
    <Menu
      fixed="top"
      style={{ padding: "0.5em 0em" }}
      color="teal"
      inverted
      secondary
      size="large"
    >
      <Container>
        <Menu.Item as="a" active={activeItem === "Home"}>
          Home
        </Menu.Item>
        <Menu.Item as="a" active={activeItem === "About"}>
          About
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
);

export default Navbar;
