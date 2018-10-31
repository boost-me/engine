import * as React from 'react'
import PlayerRow from './index'

import { storiesOf } from '@storybook/react'

storiesOf('player-row', module).add('default', () => (
  <PlayerRow name={'Async'} money={1000} health={64} />
))
