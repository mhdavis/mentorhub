import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

const GeneralContainer = ({ children }) => (
  <Responsive {...Responsive.onlyComputer}>{children}</Responsive>
);

GeneralContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralContainer;
