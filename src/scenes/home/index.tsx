import { Button, Popover } from 'antd'
import 'antd/dist/antd.css'
import * as React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  text-align: center;
`

class HomeScene extends React.Component {
  public state = {
    visible: false,
  }

  public hide = () => {
    this.setState({
      visible: false,
    })
  }

  public handleVisibleChange = (visible: boolean) => {
    this.setState({ visible })
  }

  public render() {
    return (
      <Content>
        <Popover
          content={<a onClick={this.hide}>hello world :)</a>}
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}>
          <Button type="primary">BOOST ME/ENGINE</Button>
        </Popover>
      </Content>
    )
  }
}

export default HomeScene
