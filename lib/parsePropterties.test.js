const parseProperties = require('./parsePropterties')

test('parseProperties parses cfg json for sql database', () => {
  const testContent = [
    {
      origin: '32.151203 -908.485229 -85.425278',
      angle: '1.429899 -151.466568 0.000000',
      bombsite: 'B',
      team: 'CT',
      type: '0',
    },
  ]

  expect(parseProperties('de_inferno.cfg', testContent)).toMatchSnapshot(
    'parsedObjectReadyToSave'
  )
})
