import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive } from "semantic-ui-react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

class NavbarResponsive extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, activeItem } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavbarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            {children}
          </NavbarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Navbar activeItem={activeItem} />
          {children}
        </Responsive>
      </div>
    );
  }
}

NavbarResponsive.propTypes = {
  activeItem: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavbarResponsive;
