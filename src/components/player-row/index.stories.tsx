import * as React from 'react'
import PlayerRow from './index'

import { storiesOf } from '@storybook/react'

storiesOf('components/list', module).add('row', () => (
  <PlayerRow name={'Async'} money={1000} health={64} />
))
