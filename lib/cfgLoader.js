const { join } = require('path')
const { readFileSync } = require('fs')
const bufferParser = require('./bufferParser')

const cfgLoader = path => {
  try {
    const joinedPath = join(__dirname, path)
    const fileData = readFileSync(joinedPath)
    return bufferParser(fileData)
  } catch (err) {
    throw err
  }
}

module.exports = cfgLoader
