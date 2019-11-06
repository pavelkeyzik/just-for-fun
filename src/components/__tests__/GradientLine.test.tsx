import React from 'react';
import { render } from '@testing-library/react';
import { GradientLine } from '../GradientLine';

test('should render one GradientLine component', () => {
  const { container } = render(<GradientLine />);

  expect(container.firstChild).toMatchSnapshot();
});
