import React, { Component } from 'react'
import styles from './Home.scss'

class Home extends Component {
  render() {
    return (
      <h2 className={styles['title']}>
        Welcome to BabelCoder Wiki!
      </h2>
    )
  }
}

export default Home
