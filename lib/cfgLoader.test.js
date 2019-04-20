const cfgLoader = require('./cfgLoader')

test('cfgLoader loads test.cfg', async () => {
  const loadedCfgContent = cfgLoader('../test.cfg')
  expect(loadedCfgContent).toMatchSnapshot('testCfgContent')
})

test('cfgLoader errors on incorrect file path', async () => {
  function failingCfgLoader() {
    cfgLoader('./test.cfg')
  }
  expect(failingCfgLoader).toThrowError()
})
