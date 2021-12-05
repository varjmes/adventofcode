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

  if (xStart !== xEnd && yStart !== yEnd) return map

  const newMap = map
  if (xStart === xEnd) {
    if (yStart < yEnd) {
      for (let i = yStart; i <= yEnd; i++) {
        if (newMap[i]) {
          if (newMap[i][xStart]) {
            newMap[i][xStart] = newMap[i][xStart] += 1;
          } else {
            newMap[i][xStart] = 1;
          }
        } else {
          newMap[i] = []
          newMap[i][xStart] = 1;
        }
      }
    }

    if (yStart > yEnd) {
      for (let i = yStart; i >= yEnd; i--) {
        if (newMap[i]) {
          if (newMap[i][xStart]) {
            newMap[i][xStart] = newMap[i][xStart] += 1;
          } else {
            newMap[i][xStart] = 1
          }
        }
        else {
          newMap[i] = []
          newMap[i][xStart] = 1;
        }
      }
    }
  }

  if (yStart === yEnd) {
    if (xStart < xEnd) {
      for (let i = xStart; i <= xEnd; i++) {
        if (newMap[yStart]) {
          if (newMap[yStart][i]) {
            newMap[yStart][i] = newMap[yStart][i] += 1;
          } else {
            newMap[yStart][i] = 1
          }
        }
        else {
          newMap[yStart] = []
          newMap[yStart][i] = 1;
        }
      }
    }

    if (xStart > xEnd) {
      for (let i = xStart; i >= xEnd; i--) {
        if (newMap[yStart]) {
          if (newMap[yStart][i]) {
            newMap[yStart][i] = newMap[yStart][i] += 1;
          } else {
            newMap[yStart][i] = 1;
          }
        }
        else {
          newMap[yStart] = []
          newMap[yStart][i] = 1;
        }
      }
    }
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

const string = `🎄🎄🎄 ${countOverlappingPoints(inputs)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  countOverlappingPoints,
  plotMap,
  plotMapCoOrd,
  getOverlappingPoints
}
