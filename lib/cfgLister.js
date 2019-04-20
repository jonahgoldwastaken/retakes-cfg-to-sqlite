const { join } = require('path')
const { readdirSync } = require('fs')

const cfgLister = path => {
  const joinedPath = join(__dirname, path)
  const files = readdirSync(joinedPath)
  const filteredFiles = files.slice().filter(filename => /.cfg$/.test(filename))
  return filteredFiles
}

module.exports = cfgLister
