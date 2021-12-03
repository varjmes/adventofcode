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

const getGammaRate = inputs => {
  let gammaRate = ''

  for (let i = 0; i < inputs[0].length; i++) {
    gammaRate += getMostCommon(getOccurences(inputs, i))
  }

  return gammaRate
}

const getEpsilonRate = inputs => {
  let epsilonRate = ''

  for (let i = 0; i < inputs[0].length; i++) {
    epsilonRate += getLeastCommon(getOccurences(inputs, i))
  }

  return epsilonRate
}

const getPowerConsumption = inputs => {
  const gamma = getGammaRate(inputs)
  const epsilon = getEpsilonRate(inputs)
  
  return multiply(convertBinaryToDecimal(gamma), convertBinaryToDecimal(epsilon))
}

// const string = `🎄🎄🎄 ${getPowerConsumption(inputs)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  convertBinaryToDecimal,
  getEpsilonRate,
  getGammaRate,
  getLeastCommon,
  getMostCommon,
  getOccurences,
  getPowerConsumption
}
