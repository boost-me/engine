import { List } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import PlayerRow from '../player-row'

const data = ['Niko', 'Dupree', 'Device', 'Async', 'Pant']

const Content = styled.div`
  margin: 16px;
  width: 190px;
`
export class PlayerList extends React.PureComponent<{}> {
  public render() {
    return (
      <Content>
        <List
          size={'default'}
          header={null}
          footer={null}
          bordered={true}
          dataSource={data}
          renderItem={this.renderRow}
        />
      </Content>
    )
  }

  private renderRow = (item: string) => (
    <List.Item>
      <PlayerRow name={item} money={100} health={12} />
    </List.Item>
  )
}

export default PlayerList
