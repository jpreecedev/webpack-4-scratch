import * as React from 'react'
import { Link } from 'react-router-dom'

import alert from '../../decorators/alert'
import Layout from '../../components/Layout'

class Home extends React.Component {
  state = {
    message: 'Hello, World!'
  }

  @alert('Goodbye, World!')
  showMessage = () => {
    const { message } = this.state
    alert(message)
  }

  render() {
    return (
      <Layout>
        <h1>
          A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and
          Babel 7
        </h1>
        <button type="button" className="button" onClick={this.showMessage}>
          Show me a message
        </button>
        <Link to="/about">About</Link>
        <br />
        <Link to="/nope">404 Page</Link>
      </Layout>
    )
  }
}

export default Home
