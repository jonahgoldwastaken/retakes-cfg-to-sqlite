const delTopLevelName = cfgContent =>
  cfgContent
    .split('"')
    .slice(2)
    .join('"')

module.exports = delTopLevelName
