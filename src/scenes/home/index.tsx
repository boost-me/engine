import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import './index.css'

const { Header, Sider, Content } = Layout
class HomeScene extends React.Component {
  public state = {
    collapsed: false,
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
            content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default HomeScene
