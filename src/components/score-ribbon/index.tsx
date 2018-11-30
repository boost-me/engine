import { Col, Row } from 'antd'
import { ColProps } from 'antd/lib/col'
import * as React from 'react'
import styled from 'styled-components'

interface ITeam {
  team: 'ct' | 't'
}

interface IScoreProps extends ColProps, ITeam {}
interface INameProps extends ColProps, ITeam {}

const CT = () => '#0079b9'
const T = () => '#e4c273'

const Rounds = styled<ColProps>((props) => <Col {...props} />)`
  text-align: center;
`

const Time = styled<ColProps>((props) => <Col {...props} />)`
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`

const Score = styled<IScoreProps>((props) => <Col {...props} />)`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => (props.team === 'ct' ? CT : T)};
`

const Name = styled<INameProps>((props) => <Col {...props} />)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => (props.team === 'ct' ? CT : T)};
  text-align: ${(props) => (props.team === 'ct' ? 'right' : 'left')};
`

interface IMatchRounds {
  current: number
  max: number
}

interface ITeamScore {
  name: string
  score: number
}

interface IProps {
  ct: ITeamScore
  t: ITeamScore
  rounds: IMatchRounds
  time: string
}

class ScoreRibbon extends React.PureComponent<IProps> {
  public render() {
    const { ct, t, rounds, time } = this.props
    return (
      <div>
        <Row type="flex" align="middle">
          <Col span={11}>
            <Row>
              <Name span={22} team={'ct'}>
                {ct.name}
              </Name>
              <Score span={2} team={'ct'}>
                {ct.score}
              </Score>
            </Row>
          </Col>
          <Col span={2}>
            <Row>
              <Time span={24}>{time}</Time>
            </Row>
            <Row>
              <Rounds span={24}>
                {`Round ${rounds.current}/${rounds.max}`}
              </Rounds>
            </Row>
          </Col>
          <Col span={11}>
            <Row>
              <Score span={2} team={'t'}>
                {t.score}
              </Score>
              <Name span={22} team={'t'}>
                {t.name}
              </Name>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreRibbon
