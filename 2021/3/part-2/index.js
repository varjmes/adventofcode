const chalk = require('chalk')
const path = require('path')
const { multiply, parseInput } = require('../../helpers')

const inputs = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
const convertBinaryToDecimal = binaryString => {
  return parseInt(binaryString, 2)
}

const getOccurences = (inputs, position) => {
  const occurences = { '0': 0, '1': 0 }
  for (let input of inputs) {
    occurences[input[position]]++
  }

  return occurences
}

const getMostCommon = occurences => {
  if (occurences['0'] > occurences['1']) return '0'
  return '1'
}

const getLeastCommon = occurences => {
  if (occurences['0'] > occurences['1']) return '1'
  return '0'
}

const getOxygenRating = inputs => {
  let filteredInputs = inputs

  for (let i = 0; i < inputs[0].length; i++) {
    if (filteredInputs.length === 1) break
    const mostCommon = getMostCommon(getOccurences(filteredInputs, i))
    filteredInputs = filteredInputs.filter(input => input[i] === mostCommon)
  }

  return filteredInputs[0]
}

const getScrubberRating = inputs => {
  let filteredInputs = inputs

  for (let i = 0; i < inputs[0].length; i++) {
    if (filteredInputs.length === 1) break
    const leastCommon = getLeastCommon(getOccurences(filteredInputs, i))
    filteredInputs = filteredInputs.filter(input => input[i] === leastCommon)
  }

  return filteredInputs[0]
}

const getLifeSupportRating = inputs => {
  const oxygen = getOxygenRating(inputs)
  const scrubber = getScrubberRating(inputs)
  
  return multiply(convertBinaryToDecimal(oxygen), convertBinaryToDecimal(scrubber))
}

// const string = `🎄🎄🎄 ${getLifeSupportRating(inputs)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  convertBinaryToDecimal,
  getLeastCommon,
  getLifeSupportRating,
  getMostCommon,
  getOccurences,
  getOxygenRating,
  getScrubberRating
}
