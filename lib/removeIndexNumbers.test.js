const removeIndexNumbers = require('./removeIndexNumbers')

test('removeIndexNumbers removes index numbers', () => {
  const testCfgContent = `"Spawns"
{
  "0"
  {
    "origin"		"-1728.654419 1156.588501 -217.679718"
    "angle"		"0.753380 -89.799866 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  }
  "1"
  {
    "origin"		"-1742.208984 957.078674 -223.919540"
    "angle"		"-0.626879 -46.685120 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  }
  "2"
  {
    "origin"		"-1941.909302 794.050354 -223.009537"
    "angle"		"0.053667 -67.075256 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  }
}
`
  const resultCfgContent = `"Spawns"
{
  {
    "origin"		"-1728.654419 1156.588501 -217.679718"
    "angle"		"0.753380 -89.799866 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  },
  {
    "origin"		"-1742.208984 957.078674 -223.919540"
    "angle"		"-0.626879 -46.685120 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  },
  {
    "origin"		"-1941.909302 794.050354 -223.009537"
    "angle"		"0.053667 -67.075256 0.000000"
    "bombsite"		"A"
    "team"		"T"
    "type"		"0"
  }
}
`
  expect(removeIndexNumbers(testCfgContent)).toEqual(resultCfgContent)
})
