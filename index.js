const { copyFileSync } = require('fs')
const { join } = require('path')
const sqlite = require('sqlite')
const SQL = require('sql-template-strings')
const R = require('rambda')
const cfgLister = require('./lib/cfgLister')
const cfgLoader = require('./lib/cfgLoader')
const changeObjectToArray = require('./lib/changeObjectToArray')
const delTopLevelName = require('./lib/delTopLevelName')
const formatKeysAndProperties = require('./lib/formatKeysAndProperties')
const parseProperties = require('./lib/parsePropterties')
const replaceTabsWithSpaces = require('./lib/replaceTabsWithSpaces')
const removeIndexNumbers = require('./lib/removeIndexNumbers')

const cfgContentPipe = R.pipe(
  replaceTabsWithSpaces,
  delTopLevelName,
  changeObjectToArray,
  removeIndexNumbers,
  formatKeysAndProperties,
  JSON.parse
)

;(async () => {
  copyFileSync(
    join(__dirname, 'basedb.sq3'),
    join(__dirname, 'retakes-sqlite.sq3'),
    'f'
  )
  try {
    const db = await sqlite.open(join(__dirname, 'retakes-sqlite.sq3'), {
      mode: 2,
    })
    const configFiles = cfgLister('../cfgs')
    configFiles.forEach(async file => {
      const content = cfgLoader(`../cfgs/${file}`)
      const jsonContent = cfgContentPipe(content)
      const parsedSpawns = parseProperties(file, jsonContent)
      await parsedSpawns.forEach(async spawn => {
        const query = SQL`INSERT INTO spawns(posx, posy, posz, angx, map, type, site) VALUES(${
          spawn.posx
        }, ${spawn.posy}, ${spawn.posz}, ${spawn.angx}, ${spawn.map}, ${
          spawn.type
        }, ${spawn.site})`
        await db.run(query)
      })
    })
    await db.close()
  } catch (err) {
    console.log(err)
  }
})()
