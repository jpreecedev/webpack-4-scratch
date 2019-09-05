import React from "react"

import { Layout } from "."

describe("<Layout /> tests", () => {
  it("should match snapshot", () => {
    expect(<Layout />).toMatchSnapshot()
  })
})
