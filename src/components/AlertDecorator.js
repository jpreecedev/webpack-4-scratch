export const AlertDecorator = function AlertDecorator(value) {
  return function initialize(target, prop, descriptor) {
    descriptor.initializer = function() {
      return function showAlert() {
        alert(value)
      }
    }
  }
}
