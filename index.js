import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './styles.scss'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.greeting}>Hello World</h1>
      </div>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))
