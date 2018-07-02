import React, { Component } from 'react'
import styles from './styles'

import { AlertDecorator } from '../AlertDecorator'

class App extends Component {
  state = {
    message: 'Hello, World!'
  }

  @AlertDecorator('Goodbye, World!')
  showMessage = () => {
    alert(this.state.message)
  }

  render() {
    return (
      <header>
        <h1>Hello, World!</h1>
        <h2 className={styles.module}>Goodbye</h2>
        <button onClick={this.showMessage}>Click Me</button>
      </header>
    )
  }
}

export default App
