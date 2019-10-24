import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { routes, projectName } from '../../../config';

import './NavMenu.css';

export function NavMenu() {
  return (
    <div className="NavMenu__container">
      <Link className="NavMenu__site-link" to={routes.home}>
        {projectName}
      </Link>
      <Nav className="NavMenu__menu-container">
        <NavItem>
          <NavLink tag={Link} to={routes.admin.home}>
            Dashboard
          </NavLink>
          <NavLink tag={Link} to={routes.admin.places}>
            Places
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
