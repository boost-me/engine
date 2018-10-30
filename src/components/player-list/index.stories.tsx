import * as React from 'react';
import PlayerList from './index';

import { storiesOf } from '@storybook/react';

storiesOf("player-list", module)
  .add('default', () => <PlayerList />
);