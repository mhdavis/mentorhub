import React from "react";
import PropTypes from "prop-types";
import { Header, Button, Container } from "semantic-ui-react";

const LandingPageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Welcome to Mentorhub"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Build a community by helping others"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button inverted size="huge">
      Learn More
    </Button>
  </Container>
);

LandingPageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default LandingPageHeading;
