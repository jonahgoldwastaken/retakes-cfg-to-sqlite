const bufferParser = require('./bufferParser')

test('Turn buffer into string', () => {
  const mockBufferContent = 'Hi, how are you doing?'
  const mockBuffer = Buffer.from(mockBufferContent)
  expect(bufferParser(mockBuffer)).toEqual(mockBufferContent)
})
