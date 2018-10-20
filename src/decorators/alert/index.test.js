import alertDecorator from './index'

beforeAll(() => {
  global.alert = jest.fn()
})

test('should show the provided message as an alert', () => {
  const msg = 'Some random text'

  // Initialize
  const a = {}
  alertDecorator(msg)(null, null, a)

  // Invoke
  a.initializer()()

  expect(global.alert).toHaveBeenCalledTimes(1)
  expect(global.alert).toHaveBeenCalledWith(msg)
})
