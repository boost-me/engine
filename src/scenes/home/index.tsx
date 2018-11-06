import { Icon, Layout, Menu } from 'antd'
import { SelectParam } from 'antd/lib/menu/'

import * as React from 'react'
import PlaybackScene from '../playback'
import './index.css'

const { Header, Sider, Content } = Layout

interface IState {
  collapsed: boolean
  selectedKey: string
}

class HomeScene extends React.Component<{}, IState> {
  constructor(props: object) {
    super(props)
    this.state = {
      collapsed: false,
      selectedKey: '1',
    }
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  public onMenuSelect = (params: SelectParam) => {
    this.setState({
      selectedKey: params.key,
    })
  }

  public renderContent = () => {
    const { selectedKey } = this.state
    switch (selectedKey) {
      case '1':
        return <PlaybackScene />
      default:
        return <p>no content</p>
    }
  }

  public render() {
    return (
      <Layout>
        <Sider
          theme="dark"
          style={{
            height: '100vh',
          }}
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onSelect={this.onMenuSelect}>
            <Menu.Item key="1">
              <Icon type="video-camera" />
              <span>View</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span>Upload</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '0px 0px',
              padding: 24,
              background: '#fff',
            }}>
            {this.renderContent()}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default HomeScene
