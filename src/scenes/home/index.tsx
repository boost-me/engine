import { Button, Popover } from 'antd';
import * as React from 'react';
import Upload from '../../components/upload'
import './index.css';

class HomeScene extends React.Component {
  public state = {
    visible: false,
  }

  public hide = () => {
    this.setState({
      visible: false,
    });
  }

  public handleVisibleChange = (visible: boolean) => {
    this.setState({ visible });
  }

  public render() {
    return (
      <div className="App">
        <Popover
          content={<a onClick={this.hide}>hello world :)</a>}
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">BOOST ME/ENGINE</Button>
        </Popover>
        <Upload />
      </div>
    );
  }
}

export default HomeScene;
