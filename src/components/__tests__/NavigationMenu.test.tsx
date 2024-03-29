import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationMenu } from '../NavigationMenu';
import { projectName, projectRepository, routes } from '../../config';

jest.mock('../../config', () => {
  return {
    projectName: 'PROJECT_NAME',
    projectRepository: 'PROJECT_LINK',
    routes: {
      home: '/',
      places: '/places',
      contributors: '/contributors',
    },
  };
});

test('Title should be equal to projectName field in config', () => {
  const { getByText } = render(
    <Router>
      <NavigationMenu />
    </Router>,
  );
  const title = getByText(projectName).textContent;

  expect(title).toBe(projectName);
});

test('Link to GitHub repo should be equal to projectRepository field in config', () => {
  const { getByText } = render(
    <Router>
      <NavigationMenu />
    </Router>,
  );
  const repoLinkElement = getByText('GitHub');

  expect(repoLinkElement.getAttribute('href')).toBe(projectRepository);
});

test('Link to Contributors should be taken from configuration file', () => {
  const { getByText } = render(
    <Router>
      <NavigationMenu />
    </Router>,
  );

  const element = getByText('Contributors');

  expect(element.getAttribute('href')).toEqual(routes.contributors);
});

test('Link in logo should be home page', () => {
  const { getByText } = render(
    <Router>
      <NavigationMenu />
    </Router>,
  );

  const element = getByText(projectName);

  expect(element.getAttribute('href')).toEqual(routes.home);
});

test('Check snapshot', () => {
  const { container } = render(
    <Router>
      <NavigationMenu />
    </Router>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
