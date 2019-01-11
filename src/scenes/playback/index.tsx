import * as React from 'react'
import { AppContext, Stage } from 'react-pixi-fiber'
import { connect } from 'react-redux'

import { loadRound } from '../../store/actions'
import { IRound } from '../../store/reducers/ptf'

import Canvas from '../../components/canvas'
import RoundSelector from '../../components/round-selector'
import ScoreRibbon from '../../components/score-ribbon'

interface IProps {
  dispatch: any // todo: Change this type from any.
  currentRound: number
  round: IRound
}

class PlaybackScene extends React.PureComponent<IProps> {
  public onRoundClick = (round: number) => {
    this.props.dispatch(loadRound(round))
  }

  public render() {
    const { currentRound, round } = this.props

    // tslint:disable-next-line:no-console
    // console.log(this.props.round)

    return (
      <div>
        {round && (
          <ScoreRibbon
            rounds={{ current: currentRound, max: 30 }}
            ct={round.teams.ct}
            t={round.teams.t}
            time="2:00"
          />
        )}
        <Stage width={200} height={200} options={{ backgroundColor: 0x10bb99 }}>
          <AppContext.Consumer>
            {(app) => <Canvas app={app} round={round} />}
          </AppContext.Consumer>
        </Stage>
        <RoundSelector
          numberOfRounds={30}
          currentRound={currentRound}
          onRoundClick={this.onRoundClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  currentRound: state.ptf.currentRound,
  round: state.ptf.round,
})

export default connect(mapStateToProps)(PlaybackScene)
