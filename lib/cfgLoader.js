const { join } = require('path')
const { readFile } = require('fs')
const bufferParser = require('./bufferParser')

const cfgLoader = path => {
  const joinedPath = join(__dirname, path)
  return new Promise((resolve, reject) => {
    readFile(joinedPath, (err, data) => {
      if (err) reject(err)
      resolve(bufferParser(data))
    })
  })
}

module.exports = cfgLoader
