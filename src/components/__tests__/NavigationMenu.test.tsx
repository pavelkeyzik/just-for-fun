import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationMenu } from '../NavigationMenu';
import { projectName, projectRepository } from '../../config';

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
