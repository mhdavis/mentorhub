import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Container } from 'semantic-ui-react';

const LandingPageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      inverted
      className="mh-title"
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    >
      Welcome to
      <div
        style={{
          fontFamily: 'Shrikhand, cursive',
        }}
      >
        Mentorhub
      </div>
    </Header>
    <Header
      as="h2"
      content="Build a community by helping others"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button inverted size="large">
      Learn More
    </Button>
  </Container>
);

LandingPageHeading.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default LandingPageHeading;
