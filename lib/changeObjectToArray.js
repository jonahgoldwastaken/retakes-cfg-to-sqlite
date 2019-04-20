const changeObjectToArray = cfgContent =>
  cfgContent.replace(/^{$/gm, '[').replace(/^}/gm, ']')

module.exports = changeObjectToArray
