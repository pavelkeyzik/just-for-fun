import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Input } from '../Input';

test('Should be input element', () => {
  const { container } = render(<Input />);

  expect(container.firstChild).toMatchSnapshot('should be an input');
});

test('Should apply any given props to element', () => {
  const placeholder = 'Input placeholder';
  const { container } = render(<Input placeholder={placeholder} />);

  expect(container.firstChild).toMatchSnapshot(
    'should be an input with passed placeholder value',
  );
});

test('Should change value if user type text', () => {
  const newText = 'Typed something...';
  const { getByTestId } = render(<Input />);
  const inputElement = getByTestId('input') as HTMLInputElement;

  act(() => {
    fireEvent.change(inputElement, { target: { value: newText } });
  });

  expect(inputElement.value).toEqual(newText);
});
