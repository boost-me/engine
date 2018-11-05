import * as React from 'react'
import { AppContext, Sprite, Stage } from 'react-pixi-fiber'
import mirage from '../../../assets/maps/de_mirage.jpg'
import PlayerSprite from '../../components/player-sprite'
import SmokeCircle from '../circle'
import FireCircle from '../circle'

interface IProps {
  height: number
  width: number
}

export class Canvas extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const { height, width } = this.props
    return (
      <Stage width={width} height={height}>
        <Sprite
          width={width}
          height={height}
          texture={PIXI.Texture.fromImage(mirage)}
        />
        <AppContext.Consumer>
          {(app) => <PlayerSprite app={app} />}
        </AppContext.Consumer>
        <AppContext.Consumer>
          {(app) => (
            <SmokeCircle
              x={395}
              y={500}
              radius={23}
              fill={0xb5b5b5}
              alpha={0.85}
              app={app}
            />
          )}
        </AppContext.Consumer>
        <AppContext.Consumer>
          {(app) => (
            <FireCircle
              x={510}
              y={580}
              radius={23}
              fill={0xff5b2e}
              alpha={0.85}
              app={app}
            />
          )}
        </AppContext.Consumer>
      </Stage>
    )
  }
}

export default Canvas
