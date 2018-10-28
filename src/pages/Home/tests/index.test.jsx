import * as React from 'react'
import { shallow } from 'enzyme'

import Home from '..'

function render(props) {
  return shallow(<Home {...props} />)
}

beforeAll(() => {
  global.alert = jest.fn()
})

test('should render "Hello, World!" as title', () => {
  const renderedComponent = render()
  const header = renderedComponent.find('h1')
  expect(header.text()).toBe(
    'A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and Babel 7'
  )
})

test('should show an alert with the message', () => {
  const renderedComponent = render()
  const button = renderedComponent.find('button')

  button.simulate('click')

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith('Hello, World!')
})
