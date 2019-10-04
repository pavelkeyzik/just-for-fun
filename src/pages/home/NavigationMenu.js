import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { projectRepository, projectName } from '../../config';

export function NavigationMenu() {
  return (
    <Container>
      <Navbar dark>
        <NavbarBrand>{projectName}</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href={projectRepository}>GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
}
