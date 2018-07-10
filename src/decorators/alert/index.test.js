import alertDecorator from './index'

beforeAll(function() {
  global.alert = jest.fn()
})

test('should show the provided message as an alert', function() {
  var msg = 'Some random text'

  // Initialize
  var a = {}
  alertDecorator(msg)(null, null, a)

  // Invoke
  a.initializer()()

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith(msg)
})
