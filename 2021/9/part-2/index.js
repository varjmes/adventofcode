const chalk = require('chalk')
const path = require('path')
const { multiply, parseInput } = require('../../helpers')

const getBasins = cave => {
  const basins = []
  const lowPoints = getLowPoints(cave)

  for (let point of lowPoints) {
    basins.push(getBasinSize(cave, point))
  }

  return basins.sort((a, b) => b - a)
}

// #getBasinSize adapted from work by @jdpearce
const getBasinSize = (cave, coOrdinate) => {
  const points = []
  const [x, y] = coOrdinate
  points.push([x, y])

  const adjacents = {
    top: [-1, 0],
    left: [0, -1],
    right: [0, 1],
    bottom: [1, 0],
  }

  const checked = new Set()

  while (points.length > 0) {
    const [xCurrent, yCurrent] = points.shift()
    checked.add(`${xCurrent}:${yCurrent}`)

    for (let direction in adjacents) {
      const [x0, y0] = adjacents[direction]
      const [xNext, yNext] = [xCurrent + x0, yCurrent + y0]
      if (
        xNext < 0 ||
        xNext === cave.length ||
        yNext < 0 ||
        yNext === cave[xNext].length ||
        cave[xNext][yNext] === 9) { continue; }
      if (checked.has(`${xNext}:${yNext}`)) { continue; }
      points.push([xNext, yNext])
    }
  }

  return checked.size
}

const getLowPoints = cave => {
  const lowestPoints = []
  for (let i = 0; i < cave.length; i++) {
    for (let j = 0; j < cave[i].length; j++) {
      const current = cave[i][j]
      const adjacents = [
        cave[i - 1] !== undefined ? cave[i - 1][j] : undefined, // top
        cave[i][j + 1] !== undefined ? cave[i][j + 1] : undefined, // right
        cave[i + 1] !== undefined ? cave[i + 1][j] : undefined, // bottom
        cave[i][j - 1] !== undefined ? cave[i][j - 1] : undefined // left
      ]
      const realValues = adjacents.filter(a => a !== undefined)

      if (realValues.every(a => current < a)) {
        lowestPoints.push([i, j])
      }
    }
  }

  return lowestPoints
}

module.exports = {
  getBasins,
  getBasinSize,
  getLowPoints
}

const cave = parseInput(path.resolve(__dirname, '../input.txt'), '\n').map(row => row.split('').map(Number))
const basins = getBasins(cave)
const product = multiply(multiply(basins[0], basins[1]), basins[2])
const string = `🎄🎄🎄 ${product} 🎄🎄🎄`
// console.log(chalk.green.bgRed(string));
