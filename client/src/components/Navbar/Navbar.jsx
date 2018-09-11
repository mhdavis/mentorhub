import React from 'react';
import PropTypes from 'prop-types';

/*
link structure:
{
  address: string,
  active: bool,
  parent: bool,
}
*/

const determineClasses = (link) => {
  const className = [];
  if (link.active) {
    className.push('uk-active');
  }
  if (link.parent) {
    className.push('uk-parent');
  }
  if (className.length > 0) {
    return className.join(' ');
  }
  return '';
};

const Navbar = ({ links, transparent }) => (
  <nav
    className={transparent ? 'uk-navbar-container' : 'uk-navbar-container uk-navbar-transparent'}
    uk-navbar
  >
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        {links.map(link => (
          <li className={determineClasses(link)}>
            <a href={link.address}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
};

Navbar.defaultProps = {
  transparent: false,
};

export default Navbar;
