import React from 'react';
import ReactDOM from 'react-dom';
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
  const container = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NavigationMenu />
    </Router>,
    container,
  );
  const title = container.querySelector('.navbar-brand');

  expect(title.textContent).toBe(projectName);
});

test('Link to GitHub repo should be equal to projectRepository field in config', () => {
  const container = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NavigationMenu />
    </Router>,
    container,
  );
  const links = container.querySelectorAll('.NavigationMenu__container li a');
  const repoLinkElement = links[links.length - 1];

  expect(repoLinkElement.getAttribute('href')).toBe(projectRepository);
});
