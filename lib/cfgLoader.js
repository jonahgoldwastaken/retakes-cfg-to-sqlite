const { join } = require('path')
const { readFileSync } = require('fs')
const bufferParser = require('./bufferParser')

const cfgLoader = path => {
  const joinedPath = join(__dirname, path)
  const fileData = readFileSync(joinedPath)
  return bufferParser(fileData)
}

module.exports = cfgLoader
