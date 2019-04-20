const removeIndexNumbers = cfgContent =>
  cfgContent.replace(/^\s{1,}"\d"\n/gm, '').replace(/}\n\s{1,}{$/gm, '},\n  {')
module.exports = removeIndexNumbers
