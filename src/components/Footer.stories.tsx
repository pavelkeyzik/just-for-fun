import React from 'react';
import { Footer } from './Footer';

export default {
  component: Footer,
  title: 'Footer',
};

export function withoutAnyProps(): JSX.Element {
  return <Footer />;
}
