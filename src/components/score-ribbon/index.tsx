import { Col, Row } from 'antd';
import * as React from 'react';
import './index.css';

interface IMatchRounds {
  current: number,
  max: number,
}

interface ITeamScore {
  name: string,
  score: number,
}

interface IProps {
  ct: ITeamScore,
  t: ITeamScore,
  rounds: IMatchRounds,
  time: string,
}

class ScoreRibbon extends React.PureComponent<IProps> {
  public render() {
    const { ct, t, rounds, time } = this.props
    return (
      <div className="score-ribbon">
        <Row type="flex" align="middle">
          <Col span={11}>
            <Row>
              <Col span={22} className="ct team-name team-name-ct">
                {ct.name}
              </Col>
              <Col span={2} className="ct score">
                {ct.score}
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row>
              <Col span={24} className="time">
                {time}
              </Col>
            </Row>
            <Row>
              <Col span={24} className="rounds">
                {`Round ${rounds.current}/${rounds.max}`}
              </Col>
            </Row>
          </Col>
          <Col span={11}>
            <Row>
              <Col span={2} className="t score">
                {t.score}
              </Col>
              <Col span={22} className="t team-name team-name-t">
                {t.name}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreRibbon