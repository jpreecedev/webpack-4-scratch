import * as React from "react"
import { Link } from "react-router-dom"

import { Layout } from "../../components/Layout"

const NotFound = () => (
  <Layout>
    <h1 className="text-center">404.</h1>
    <p>Sorry the requested page was not found</p>
    <Link to="/">Home</Link>
  </Layout>
)

export { NotFound }
