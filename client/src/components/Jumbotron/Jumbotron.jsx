import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({ heading, subheading, buttonLink }) => (
  <div>
    <h1 className="uk-primary-heading">{heading}</h1>
    {subheading ? <p>{subheading}</p> : null}
    <a className="uk-button uk-button-primary" href={buttonLink}>
      Signin
    </a>
  </div>
);

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default Jumbotron;
