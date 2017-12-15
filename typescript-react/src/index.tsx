import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import './index.less'

const rootEl = document.getElementById('root')

const AppTypeAny: any = App

ReactDOM.render(
  <AppTypeAny />,
  rootEl
)

// 模块热替换
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
