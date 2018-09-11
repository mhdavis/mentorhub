import React from 'react';
import PropTypes from 'prop-types';
import MobileContainer from '../containers/MobileContainer';
import DesktopContainer from '../containers/DesktopContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveContainer;
