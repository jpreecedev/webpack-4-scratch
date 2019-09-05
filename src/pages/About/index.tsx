import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

import { Layout } from "../../components/Layout"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => (
  <Layout>
    <h1 className="text-center">About page</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export { About }
