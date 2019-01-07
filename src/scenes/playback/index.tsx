import * as React from 'react'
import { connect } from 'react-redux'

import { loadRound } from '../../store/actions'
import { IRound } from '../../store/reducers/ptf'

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
