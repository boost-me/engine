import { Avatar, Col, Progress, Row } from 'antd'
import * as React from 'react'
import './index.css'

interface IProps {
  name: string
  money: number
  health: number
}

class PlayerRow extends React.PureComponent<IProps> {
  public render() {
    const { name, money, health } = this.props
    return (
      <div className="cell">
        <Row>
          <Col span={12} className="name">
            {name}
          </Col>
          <Col span={12} className="money">
            ${money}
          </Col>
        </Row>
        <Progress percent={health} size="small" showInfo={false} />
        <Row>
          <Avatar className="utility" shape="square" size="small" icon="tool" />
          <Avatar className="utility" shape="square" size="small" icon="tool" />
          <Avatar className="utility" shape="square" size="small" icon="tool" />
          <Avatar className="utility" shape="square" size="small" icon="tool" />
          <Avatar className="utility" shape="square" size="small" icon="tool" />
        </Row>
      </div>
    )
  }
}

export default PlayerRow
