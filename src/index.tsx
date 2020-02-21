import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import '@babel/polyfill'

const render = (): void => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}

module.hot?.accept('./app', render)

render()
