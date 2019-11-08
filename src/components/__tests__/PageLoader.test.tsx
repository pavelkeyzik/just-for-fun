import React from 'react';
import { render } from '@testing-library/react';
import { PageLoader } from '../PageLoader';

test('Should return loader with message `Hello World`', () => {
  const message = 'Hello World';
  const { getAllByText } = render(<PageLoader message={message} />);

  const elementsWithText = getAllByText(message);

  expect(elementsWithText).toHaveLength(1);
});

test('Check snapshot with `Hello World`', () => {
  const message = 'Hello World';
  const { container } = render(<PageLoader message={message} />);

  expect(container.firstChild).toMatchSnapshot();
});
