import * as React from 'react'
import { AppContext, Stage } from 'react-pixi-fiber'
import PlayerSprite from './index'

import { storiesOf } from '@storybook/react'

storiesOf('player-sprite', module).add('default', () => (
  <Stage width={50} height={50} options={{ backgroundColor: 0xffffff }}>
    <AppContext.Consumer>
      {(app) => <PlayerSprite app={app} />}
    </AppContext.Consumer>
  </Stage>
))
