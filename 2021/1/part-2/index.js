const chalk = require('chalk')
const path = require('path')
const parseInput = require('../../helpers/parseInput')

const depths = parseInput(path.resolve(__dirname, '../input.txt'), '\n').map(input => parseInt(input))

const generateSlidingWindowDepths = (depths, window) => {
  const slidingWindowDepths = []

  for (let i = 0; i < depths.length; i++) {
    const slice = depths.slice(i, i + window)
    if (slice.length < window) break

    const sum = slice.reduce((a, b) => a + b, 0)
    slidingWindowDepths.push(sum)
  }

  return slidingWindowDepths
}

const countDepthIncreases = depths => {
  const WINDOW = 3
  if (!depths || depths.length < WINDOW) return 0

  const slidingWindowDepths = generateSlidingWindowDepths(depths, WINDOW)
  const count = slidingWindowDepths.filter((depth, i) => {
    return depth > slidingWindowDepths[i - 1]
  }).length

  return count
}

const string = `🎄🎄🎄 ${countDepthIncreases(depths)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  countDepthIncreases,
  generateSlidingWindowDepths
}
