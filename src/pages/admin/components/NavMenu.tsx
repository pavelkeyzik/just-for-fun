import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { routes, projectName } from '../../../config';

import styles from './NavMenu.module.css';

export function NavMenu(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link className={styles.siteLink} to={routes.home}>
        {projectName}
      </Link>
      <Nav className={styles.menuContainer}>
        <NavItem>
          <NavLink tag={Link} to={routes.admin.home}>
            Dashboard
          </NavLink>
          <NavLink tag={Link} to={routes.admin.places}>
            Places
          </NavLink>
          <NavLink tag={Link} to={routes.admin.events}>
            Events
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
