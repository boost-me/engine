import * as React from 'react';
import Upload from './index';

import { storiesOf } from '@storybook/react';

storiesOf("TypeScript and Storybook", module)
  .add('Sample Widget', () => <Upload />);