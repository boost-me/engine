import { Sprite, Stage } from '@inlet/react-pixi'
import * as React from 'react';


export class Canvas extends React.PureComponent<{}> {
  public render() {
    return (
      <Stage>
        <Sprite image="./bunny.png" x={100} y={100} />
      </Stage>
    )
  }
}

export default Canvas 