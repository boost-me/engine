import * as React from 'react'
import { Sprite } from 'react-pixi-fiber'
import ct from '../../../assets/players/ct.png'
import t from '../../../assets/players/t.png'

interface IProps {
  app: PIXI.Application
}
interface IState {
  x: number
  y: number
  type: 'ct' | 't'
}

class PlayerSprite extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      type: 't',
    }
  }

  public componentDidMount() {
    this.props.app.ticker.add(this.loop)
  }

  public componentWillUnmount() {
    this.props.app.ticker.remove(this.loop)
  }

  public loop(delta: number) {
    //
  }

  public render() {
    const { x, y, type } = this.state
    return (
      <Sprite
        width={15}
        height={15}
        x={x}
        y={y}
        texture={PIXI.Texture.fromImage(type === 'ct' ? ct : t)}
      />
    )
  }
}

export default PlayerSprite
