const parsePropterties = (mapName, cfgContent) =>
  cfgContent.map(spawn => ({
    posx: +spawn.origin.split(' ')[0],
    posy: +spawn.origin.split(' ')[1],
    posz: +spawn.origin.split(' ')[2],
    angx: +spawn.angle.split(' ')[0],
    map: mapName.split('.')[0],
    type: spawn.team === 'T' ? (spawn.type == 1 ? 1 : 2) : 3,
    site: spawn.bombsite === 'A' ? 0 : 1,
  }))

module.exports = parsePropterties
