import {
  Avatar as AntAvatar,
  Col as AntCol,
  Progress,
  Row as AntRow,
} from 'antd'
import 'antd/dist/antd.css'
import { AvatarProps } from 'antd/lib/avatar'
import { ColProps } from 'antd/lib/col'
import { RowProps } from 'antd/lib/row'
import * as React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
  width: 140px;
`

const Avatar = styled<AvatarProps>((props) => <AntAvatar {...props} />)`
  margin-right: 4px;
`

const Row = styled<RowProps>((props) => <AntRow {...props} />)`
  flex-flow: row wrap;
`

const Name = styled<ColProps>((props) => <AntCol {...props} />)`
  font-size: 12px;
  font-weight: 500;
  height: 10px;
`

const Money = styled<ColProps>((props) => <AntCol {...props} />)`
  font-size: 12px;
  text-align: right;
  height: 8px;
`

interface IProps {
  name: string
  money: number
  health: number
}

class PlayerRow extends React.PureComponent<IProps> {
  public render() {
    const { name, money, health } = this.props
    return (
      <Cell>
        <Row>
          <Name span={12}>{name}</Name>
          <Money span={12}>${money}</Money>
        </Row>
        <Progress percent={health} size="small" showInfo={false} />
        <Row>
          <Avatar shape="square" size="small" icon="tool" />
          <Avatar shape="square" size="small" icon="tool" />
          <Avatar shape="square" size="small" icon="tool" />
          <Avatar shape="square" size="small" icon="tool" />
          <Avatar shape="square" size="small" icon="tool" />
        </Row>
      </Cell>
    )
  }
}

export default PlayerRow
