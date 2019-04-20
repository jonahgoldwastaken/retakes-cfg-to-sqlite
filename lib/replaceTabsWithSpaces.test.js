const replaceTabsWithSpaces = require('./replaceTabsWithSpaces')

test('replaceTabsWithSpaces replaces tabs with spaces', () => {
  const testCfgContent = `"Spawns"
{
\t"0"
\t{
\t\t"origin"		"-1728.654419 1156.588501 -217.679718"
\t\t"angle"		"0.753380 -89.799866 0.000000"
\t\t"bombsite"		"A"
\t\t"team"		"T"
\t\t"type"		"0"
\t}
\t"1"
\t{
\t\t"origin"		"-1742.208984 957.078674 -223.919540"
\t\t"angle"		"-0.626879 -46.685120 0.000000"
\t\t"bombsite"		"A"
\t\t"team"		"T"
\t\t"type"		"0"
\t}
\t"2"
\t{
\t\t"origin"		"-1941.909302 794.050354 -223.009537"
\t\t"angle"		"0.053667 -67.075256 0.000000"
\t\t"bombsite"		"A"
\t\t"team"		"T"
\t\t"type"		"0"
\t}
}
`
  expect(replaceTabsWithSpaces(testCfgContent)).toMatchSnapshot(
    'tabsReplacedWithSpaces'
  )
})
