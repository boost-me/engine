import * as React from 'react'
import Upload from './index'

import { storiesOf } from '@storybook/react'

storiesOf('components/upload-demo', module).add('default', () => (
  <Upload
    text={'Lorem ipsum dolor sit amet'}
    hint={
      'Fusce malesuada magna leo, quis pharetra urna finibus nec. Sed vitae ex mauris. Mauris orci ex.'
    }
  />
))
