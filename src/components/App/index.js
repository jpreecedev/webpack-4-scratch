import * as React from 'react'
import styles from './styles.module.scss'

import alert from '../../decorators/alert'

class App extends React.Component {
  state = {
    message: 'Hello, World!'
  }

  @alert('Goodbye, World!')
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
