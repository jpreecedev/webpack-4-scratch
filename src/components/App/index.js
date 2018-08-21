import * as React from 'react'
import { hot } from 'react-hot-loader'
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
      <main>
        <a
          className={styles.link}
          href="https://www.developerhandbook.com"
          target="_blank"
        >
          <img
            className={styles.image}
            src="/img/developerhandbook.png"
            alt="DeveloperHandbook.com"
          />
        </a>
        <h1 className={styles.heading}>
          A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and
          Babel 7
        </h1>
        <button className={styles.button} onClick={this.showMessage}>
          Show me a message
        </button>
      </main>
    )
  }
}

export default hot(module)(App)
