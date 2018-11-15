import { Icon, message, Upload } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload/interface'
import * as React from 'react'
const Dragger = Upload.Dragger
import 'antd/dist/antd.css'

interface IProps {
  text: string
  hint?: string
}

export class UploadDemo extends React.PureComponent<IProps> {
  private readonly properties = {
    action: '//jsonplaceholder.typicode.com/posts/', // todo setup S3 or similar
    multiple: true,
    name: 'file',
    onChange(info: UploadChangeParam) {
      const status = info.file.status
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  public render() {
    const { text, hint } = this.props
    return (
      <Dragger {...this.properties}>
        <p className="ant-upload-drag-icon">
          <Icon type="file" />
        </p>
        <p className="ant-upload-text">{text}</p>
        <p className="ant-upload-hint">{hint}</p>
      </Dragger>
    )
  }
}

export default UploadDemo
