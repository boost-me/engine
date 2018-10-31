import * as React from 'react'
import ScoreRibbon from './index'

import { storiesOf } from '@storybook/react'

storiesOf("score-ribbon", module)
  .add('default', () =>
    <ScoreRibbon
      rounds={{ current: 5, max: 30 }}
      ct={{ name: 'Team F*ckho', score: 5 }}
      t={{ name: 'Astralis', score: 0 }}
      time="1:05"
    />
  );