import * as React from 'react'
import RoundSelector from './index'

import { storiesOf } from '@storybook/react'

storiesOf('components/round-selector', module).add('selector', () => (
  <RoundSelector numberOfRounds={16} currentRound={5} />
))
