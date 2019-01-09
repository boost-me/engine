import * as React from 'react'
import HomeScene from './index'

import { storiesOf } from '@storybook/react'

storiesOf('scenes/home', module).add('default', () => <HomeScene />)
