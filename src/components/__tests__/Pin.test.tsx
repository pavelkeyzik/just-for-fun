import React from 'react';
import { render } from '@testing-library/react';
import { Pin } from '../Pin';

test('Should render SVG element with Pin icon', () => {
  const { container } = render(<Pin />);

  expect(container.firstChild).toMatchSnapshot();
});
