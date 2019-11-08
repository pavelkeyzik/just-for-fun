import React from 'react';
import { Input } from './Input';

export default {
  component: Input,
  title: 'Input',
};

export function withoutAnyProps(): JSX.Element {
  return <Input />;
}

export function withoutValue(): JSX.Element {
  return <Input value="Hello world" />;
}
