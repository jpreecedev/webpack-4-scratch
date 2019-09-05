import React, { FunctionComponent } from "react"
import logo from "./logo.png"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main className="text-center">
      <a
        href="https://www.developerhandbook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="DeveloperHandbook.com" />
      </a>
      {children}
    </main>
  )
}

export { Layout }
