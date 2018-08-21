import * as React from 'react'
import { shallow } from 'enzyme'

import App from './index'

var render = function(props) {
  return shallow(<App {...props} />)
}

beforeAll(function() {
  global.alert = jest.fn()
})

test('should render "Hello, World!" as title', function() {
  var renderedComponent = render()
  var header = renderedComponent.find('h1')
  expect(header.text()).toBe(
    'A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and Babel 7'
  )
})

test('should show an alert with the message from the decorator', function() {
  var renderedComponent = render()
  var button = renderedComponent.find('button')

  button.simulate('click')

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith('Goodbye, World!')
})
