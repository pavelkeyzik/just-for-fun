import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { routes, projectName } from '../../../config';

import './NavMenu.css';

export function NavMenu() {
  return (
    <Nav className="NavMenu__container">
      <NavItem>
        <NavLink tag={Link} to={routes.home}>
          {projectName}
        </NavLink>
        <NavLink tag={Link} to={routes.admin.home}>
          Dashboard
        </NavLink>
        <NavLink tag={Link} to={routes.admin.places}>
          Places
        </NavLink>
      </NavItem>
    </Nav>
  );
}
