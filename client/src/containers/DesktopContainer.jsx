import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Container, Menu, Responsive, Segment, Visibility,
} from 'semantic-ui-react';
import LandingPageHeading from '../components/LandingPage/LandingPageHeading';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar,
 *  however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
  }

  hideFixedMenu() {
    this.setState({ fixed: false });
  }

  showFixedMenu() {
    this.setState({ fixed: true });
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            color="teal"
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu fixed={fixed ? 'top' : null} inverted={!fixed} secondary={!fixed} size="large">
              <Container>
                <Menu.Item as={Link} to="/" active>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/about">
                  About
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as={Link} to="/login" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    inverted={!fixed}
                    color={fixed ? 'teal' : null}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <LandingPageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopContainer;
