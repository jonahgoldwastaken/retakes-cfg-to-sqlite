const { join } = require('path')
const { readdirSync } = require('fs')

const cfgLister = path => {
  const joinedPath = join(__dirname, path)
  const files = readdirSync(joinedPath)
  return files
}

module.exports = cfgLister
