import { List } from 'antd'
import * as React from 'react'
import PlayerRow from '../player-row'
import './index.css'

const data = ['Niko', 'Dupree', 'Device', 'Async', 'Pant']

export class PlayerList extends React.PureComponent<{}> {
  public render() {
    return (
      <div>
        <List
          size={'default'}
          className={'list'}
          header={null}
          footer={null}
          bordered={true}
          dataSource={data}
          renderItem={this.renderRow}
        />
      </div>
    )
  }

  private renderRow = (item: string) => (
    <List.Item>
      <PlayerRow name={item} money={100} health={12} />
    </List.Item>
  )
}

export default PlayerList
