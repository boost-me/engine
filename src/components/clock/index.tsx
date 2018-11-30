import * as React from 'react'
import { AppContext, Stage } from 'react-pixi-fiber'
import RunningClock from '../running-clock'

// interface IProps {}

class Clock extends React.PureComponent<{}> {
  public render() {
    return (
      <Stage width={200} height={200} options={{ backgroundColor: 0x10bb99 }}>
        <AppContext.Consumer>
          {(app) => <RunningClock app={app} />}
        </AppContext.Consumer>
      </Stage>
    )
  }
}

export default Clock
