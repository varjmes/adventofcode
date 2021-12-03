const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const depths = parseInput(path.resolve(__dirname, '../input.txt'), '\n').map(input => parseInt(input))
const countDepthIncreases = depths => {
  if (!depths || depths.length === 1) return 0

  const count = depths.filter((depth, i) => {
    return depth > depths[i - 1]
  }).length
  return count
}

const string = `🎄🎄🎄 ${countDepthIncreases(depths)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = countDepthIncreases
