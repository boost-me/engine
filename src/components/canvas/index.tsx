import * as React from 'react'
import { Sprite, Stage } from 'react-pixi-fiber'
import mirage from '../../../assets/maps/de_mirage.jpg'

export class Canvas extends React.PureComponent<{}> {
  public height = 800
  public width = 800
  public OPTIONS = {}

  public render() {
    return (
      <Stage width={this.width} height={this.height} options={this.OPTIONS}>
        <Sprite
          width={this.width}
          height={this.height}
          texture={PIXI.Texture.fromImage(mirage)}
        />
      </Stage>
    )
  }
}

export default Canvas
