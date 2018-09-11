import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Container, Menu, Segment,
} from 'semantic-ui-react';

const NavbarDesktop = ({ activeItem }) => (
  <Segment>
    <Menu fixed="top" style={{ padding: '1em 0em' }} color="teal" inverted secondary size="large">
      <Container>
        <Menu.Item as={Link} to="/" active={activeItem === 'Home'}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/about" active={activeItem === 'About'}>
          About
        </Menu.Item>
        <Menu.Item position="right">
          <Button as={Link} to="/login" inverted>
            Log in
          </Button>
          <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </Segment>
);

NavbarDesktop.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default NavbarDesktop;
