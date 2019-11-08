import React from 'react';
import { Pin } from './Pin';

export default {
  component: Pin,
  title: 'Pin',
};

export function withoutAnyProps(): JSX.Element {
  return <Pin />;
}
