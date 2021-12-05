const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const inputs = parseInput(path.resolve(__dirname, '../input.txt'), '\n')

const getOverlappingPoints = map => {
  const overlappingPoints = []
  for (let row in map) {
    map[row].map(coOrd => {
      if (coOrd >= 2) overlappingPoints.push(coOrd)
    })
  }
  return overlappingPoints
}

const plotMapCoOrd = (map, input) => {
  const [start, end] = input.split(' -> ')
  const [xStart, yStart] = start.split(',').map(Number)
  const [xEnd, yEnd] = end.split(',').map(Number)
  let newMap = map

  let xIncrement;
  if (xStart === xEnd) xIncrement = 0
  if (xEnd > xStart) xIncrement = 1
  if (xEnd < xStart) xIncrement = -1

  let yIncrement;
  if (yStart === yEnd) yIncrement = 0
  if (yEnd > yStart) yIncrement = 1
  if (yEnd < yStart) yIncrement = -1

  for (let i = xStart, j = yStart; i !== xEnd + xIncrement || j !== yEnd + yIncrement; i += xIncrement, j += yIncrement) {
    newMap[j] = newMap[j] || []
    newMap[j][i] = newMap[j][i] + 1 || 1
  }

  return newMap
}

const plotMap = inputs => {
  let map = {}
  for (let input of inputs) {
    map = plotMapCoOrd(map, input)
  }

  return map
}

const countOverlappingPoints = inputs => {
  const map = plotMap(inputs)
  const count = getOverlappingPoints(map).length
  return count
}

// const string = `🎄🎄🎄 ${countOverlappingPoints(inputs)} 🎄🎄🎄`
// console.log(chalk.green.bgRed(string));

module.exports = {
  countOverlappingPoints,
  plotMap,
  plotMapCoOrd,
  getOverlappingPoints
}
