const addCommasToProperties = cfgContent =>
  cfgContent.replace(/("\s+"[\s\S][^"]*)(?:"\n)(?!\s*})/gm, '$1",\n')
const addColonsAfterKeys = cfgContent =>
  cfgContent.replace(/(?!^)"\s{2,}"/gm, '":    "')

const formatKeysAndProperties = cfgContent =>
  addColonsAfterKeys(addCommasToProperties(cfgContent))

module.exports = formatKeysAndProperties
