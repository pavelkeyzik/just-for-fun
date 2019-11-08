import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  component: NavigationMenu,
  title: 'NavigationMenu',
};

export function withoutAnyProps(): JSX.Element {
  return (
    <Router>
      <NavigationMenu />
    </Router>
  );
}
