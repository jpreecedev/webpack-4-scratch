import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.scss'

import alert from '../../decorators/alert'
import { forwardsAction, backwardsAction } from '../../store/actions'

class App extends Component {
  state = {
    message: 'Hello, World!'
  }

  @alert('Goodbye, World!')
  showMessage = () => {
    alert(this.state.message)
  }

  render() {
    const { forwardsCounter, backwardsCounter, goForwards, goBackwards } = this.props
    return (
      <header>
        <h1>Hello, World!</h1>
        <h2 className={styles.module}>Goodbye</h2>
        <button onClick={this.showMessage}>Click Me</button>
        <p>Forwards Counter: {forwardsCounter}</p>
        <p>Backwards Counter: {backwardsCounter}</p>
        <button onClick={() => goForwards()}>Increment Counter</button>
        <button onClick={() => goBackwards()}>Decrement Counter</button>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  forwardsCounter: state.forwards.counter,
  backwardsCounter: state.backwards.counter
})

const mapDispatchToProps = dispatch => ({
  goForwards: () => dispatch(forwardsAction()),
  goBackwards: () => dispatch(backwardsAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
