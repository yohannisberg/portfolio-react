// IMPORTANT - 
// add "dev": "concurrently \"vite\" \"builder-dev-tools\"" to package.json

import { Builder, builder } from '@builder.io/react';
import { FancyCallout } from './components/FancyCallout';

builder.init('59e38532d569405f84fa31a7843a0d36');

console.log('hi');

Builder.registerComponent(FancyCallout, {
  name: 'FancyCallout',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Hello from React' },
    { name: 'body', type: 'longText', defaultValue: 'This component was imported into Builder.io' },
  ],
});