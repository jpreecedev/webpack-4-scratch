/* eslint-disable no-param-reassign, no-alert */

const alertDecorator = function alertDecorator(value) {
  return function initialize(target, prop, descriptor) {
    descriptor.initializer = function initializer() {
      return function showAlert() {
        alert(value)
      }
    }
  }
}

export default alertDecorator
