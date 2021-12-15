const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

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
        lowestPoints.push(current)
      }
    }
  }

  return lowestPoints
}

const getRiskPoints = heights => {
  return heights.map(h => h + 1)
}

const sumRiskPoints = riskPoints => {
  return riskPoints.reduce((a, b) => a + b, 0)
}

const cave = parseInput(path.resolve(__dirname, '../input.txt'), '\n').map(row => row.split('').map(Number))
const lowestPoints = getLowPoints(cave)
const riskPoints = getRiskPoints(lowestPoints)
const string = `🎄🎄🎄 ${sumRiskPoints(riskPoints)} 🎄🎄🎄`
console.log(chalk.red.bgGreen(string));
module.exports = {
  getLowPoints,
  getRiskPoints,
  sumRiskPoints
}
