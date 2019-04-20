const cfgLister = require('./cfgLister')

test('cfgLister to list all files in cfgs folder', () => {
  expect(cfgLister('../cfgs')).toMatchSnapshot('cfgFolderContents')
})
