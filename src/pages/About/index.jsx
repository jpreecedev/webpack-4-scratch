import * as React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'

function About() {
  return (
    <Layout>
      <h1 className="text-center">About page</h1>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About
