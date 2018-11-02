import * as React from 'react'
import { AppContext, Sprite, Stage } from 'react-pixi-fiber'
import mirage from '../../../assets/maps/de_mirage.jpg'
import PlayerSprite from '../../components/player-sprite'

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
      </Stage>
    )
  }
}

export default Canvas
