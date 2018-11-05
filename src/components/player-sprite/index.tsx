import * as React from 'react'
import { Sprite, Text } from 'react-pixi-fiber'
import PlayerCircle from '../circle'

interface IProps {
  app: PIXI.Application
}
interface IState {
  name: string
  x: number
  y: number
}

class PlayerSprite extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      name: 'unknown',
      x: 350,
      y: 350,
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
    const { x, y, name } = this.state
    const style = new PIXI.TextStyle({
      fill: '#ffffff',
      fontSize: 12,
      fontWeight: 'bolder',
      strokeThickness: 0.5,
    })
    const anchor = new PIXI.ObservablePoint(() => null, undefined, 0.5, 0.5)
    return (
      <Sprite>
        <Text anchor={anchor} text={name} style={style} x={x} y={y - 15} />
        <PlayerCircle x={x} y={y} radius={15 / 2} fill={0x0079b9} alpha={1} />
      </Sprite>
    )
  }
}

export default PlayerSprite
