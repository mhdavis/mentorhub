import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive } from "semantic-ui-react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

class Navbar extends Component {
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
          <NavbarDesktop activeItem={activeItem} />
          {children}
        </Responsive>
      </div>
    );
  }
}

Navbar.propTypes = {
  activeItem: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Navbar;
