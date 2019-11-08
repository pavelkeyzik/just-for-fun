import { configure, addDecorator } from '@storybook/react';

import '../src/setup';

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
