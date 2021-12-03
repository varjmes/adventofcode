const chalk = require('chalk')
const path = require('path')
const { multiply, parseInput } = require('../../helpers')

const movements = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
const getSinglePosition = (coOrdinates, movement) => {
  const [direction, steps] = movement.split(' ')
  const stepsToNumber = parseInt(steps)
  const newCoordinates = coOrdinates
  switch (direction) {
    case 'forward':
      newCoordinates.x = newCoordinates.x + stepsToNumber
      break;
    case 'up':
      newCoordinates.y = newCoordinates.y - stepsToNumber;
      break;
    case 'down':
      newCoordinates.y = newCoordinates.y + stepsToNumber
    default:
      break;
  }

  return newCoordinates
}

const planTotalJourney = (startingCoordinates, movements) => {
  const newCoordinates = startingCoordinates

  for (let movement of movements) {
    const { x, y } = getSinglePosition(newCoordinates, movement)
    newCoordinates.x = x
    newCoordinates.y = y
  }

  return multiply(newCoordinates.x, newCoordinates.y)
}

const string = `🎄🎄🎄 ${planTotalJourney({ x: 0, y: 0 }, movements)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  getSinglePosition,
  planTotalJourney
}
