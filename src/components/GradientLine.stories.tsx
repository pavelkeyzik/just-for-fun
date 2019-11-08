import React from 'react';
import { GradientLine } from './GradientLine';

export default {
  component: GradientLine,
  title: 'GradientLine',
};

export function withoutAnyProps(): JSX.Element {
  return <GradientLine />;
}
