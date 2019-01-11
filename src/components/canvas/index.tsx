import * as PIXI from 'pixi.js'
import * as React from 'react'
import { Container, Text } from 'react-pixi-fiber'

import { IEntity, IRound } from '../../store/reducers/ptf'

interface IProps {
  app: PIXI.Application
  round: IRound
}

interface IState {
  frames: number
  seconds: number
  tick: number
  entities?: [IEntity]
}

class Canvas extends React.PureComponent<IProps, IState> {
  public state = {
    frames: 0,
    seconds: 0,
    tick: 0,
    entities: undefined,
  }

  public componentDidMount() {
    this.props.app.ticker.add(this.animate)

    if (this.props.round) {
      setInterval(() => {
        const tick = this.state.tick + 1
        const seconds = tick / 16

        if (
          this.props.round &&
          this.props.round.ticks &&
          this.props.round.ticks[tick]
        ) {
          // tslint:disable-next-line:no-console
          console.log(this.props.round)
        }
        // const entities = this.props.round.ticks[tick].entities

        this.setState({
          tick,
          seconds,
          // entities,
        })
      }, 1000 / 16)
    }
  }

  public getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    // tslint:disable-next-line:no-console
    console.log(this.props.round)
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

export default Canvas
