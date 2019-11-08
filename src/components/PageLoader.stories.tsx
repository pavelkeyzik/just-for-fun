import React from 'react';
import { PageLoader } from './PageLoader';

export default {
  component: PageLoader,
  title: 'PageLoader',
};

export function withHelloWorldMessage(): JSX.Element {
  return <PageLoader message="Hello World" />;
}

export function withEmptyMessage(): JSX.Element {
  return <PageLoader message="" />;
}
