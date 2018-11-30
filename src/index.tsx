import 'antd/dist/antd.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import HomeScene from './scenes/home'
import { configureStore } from './store'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <HomeScene />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
