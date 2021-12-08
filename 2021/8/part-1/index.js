const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const key = {
  2: 1,
  3: 7,
  4: 4,
  7: 8
}

const getAllOccurences = (inputs, digits) => {
  const allOccurences = []

  for (let input of inputs) {
    const [, output] = input.split(' | ')
    const outputArray = output.split(' ')
    const occurences = getOccurences(outputArray, digits)

    allOccurences.push(...occurences)
  }

  return allOccurences
}

const getOccurences = (displays, digits) => {
  const occurences = []

  for (let display of displays) {
    for (let digit of digits) {
      const length = display.length
      if (key[length] === digit) {
        occurences.push(key[length])
      }
    }
  }

  return occurences
}

const inputs = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
const string = `🎄🎄🎄 ${getAllOccurences(inputs, [1, 4, 7, 8]).length} 🎄🎄🎄`
console.log(chalk.red.bgGreen(string));

module.exports = {
  getAllOccurences,
  getOccurences
}
