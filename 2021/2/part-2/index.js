const chalk = require('chalk')
const path = require('path')
const parseInput = require('../../helpers/parseInput')

const movements = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
const getSinglePosition = (coOrdinates, movement) => {
  const [direction, steps] = movement.split(' ')
  const stepsToNumber = parseInt(steps)
  const newCoordinates = coOrdinates
  switch (direction) {
    case 'forward':
      newCoordinates.x = newCoordinates.x + stepsToNumber
      newCoordinates.y = newCoordinates.y + multiply(stepsToNumber, newCoordinates.z)
      break;
    case 'up':
      newCoordinates.z = newCoordinates.z - stepsToNumber;
      break;
    case 'down':
      newCoordinates.z = newCoordinates.z + stepsToNumber
    default:
      break;
  }

  return newCoordinates
}

const multiply = (a, b) => { return a * b; }

const planTotalJourney = (startingCoordinates, movements) => {
  const newCoordinates = startingCoordinates

  for (let movement of movements) {
    const { x, y } = getSinglePosition(newCoordinates, movement)
    newCoordinates.x = x
    newCoordinates.y = y
  }

  return multiply(newCoordinates.x, newCoordinates.y)
}

const string = `🎄🎄🎄 ${planTotalJourney({ x: 0, y: 0, z: 0 }, movements)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  getSinglePosition,
  multiply,
  planTotalJourney
}
