import * as PIXI from 'pixi.js'
import * as React from 'react'
import { Container, Text } from 'react-pixi-fiber'

interface IProps {
  app: PIXI.Application
}

interface IState {
  frames: number
  seconds: number
  tick: number
}

class RunningClock extends React.PureComponent<IProps, IState> {
  public state = {
    frames: 0,
    seconds: 0,
    tick: 0,
  }

  public componentDidMount() {
    this.props.app.ticker.add(this.animate)

    setInterval(() => {
      const tick = this.state.tick + 1
      const seconds = tick / 16

      this.setState({
        tick,
        seconds,
      })
    }, 1000 / 16)
  }

  public componentWillUnmount() {
    this.props.app.ticker.remove(this.animate)
  }

  public animate = (delta: number) => {
    this.setState({
      frames: this.state.frames + 1,
    })
  }

  public render() {
    return (
      <Container>
        <Text text={`frames: ${this.state.frames}`} />
        <Text text={`seconds: ${this.state.seconds}`} y={30} />
        <Text text={`tick: ${this.state.tick}`} y={60} />
      </Container>
    )
  }
}

export default RunningClock
