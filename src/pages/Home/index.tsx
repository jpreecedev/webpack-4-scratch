import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

import { Layout } from "../../components/Layout"

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => setState(Math.floor(Math.random() * 6) + 1), 1000)
  }, [])

  return (
    <Layout>
      <h1>
        A bare bones React boilerplate, featuring Webpack 4, React, Jest, PostCSS and
        TypeScript
      </h1>
      <p>Here is a lovely random number: {state}</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/nope">404 Page</Link>
    </Layout>
  )
}

export { Home }
