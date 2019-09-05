import React, { FunctionComponent } from "react"

interface ButtonProps {
  color?: "primary" | "secondary"
}

const Button: FunctionComponent<ButtonProps> = ({ children, color = "primary" }) => {
  return (
    <button type="button" className={`button button-${color}`}>
      {children}
    </button>
  )
}

export { Button }
