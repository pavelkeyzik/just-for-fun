import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../Footer';

test('Check snapshot', () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();
});

test('Check text in footer', () => {
  const { container } = render(<Footer />);

  expect(container.textContent).toEqual('Make fun with love');
});
