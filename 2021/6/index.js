const chalk = require('chalk');
const path = require('path')
const { parseInput } = require('../helpers')

const getInitialState = input => {
  const initialState = {}

  for (let lanternFish of input) {
    initialState[lanternFish] ? initialState[lanternFish] += 1 : initialState[lanternFish] = 1 
  }

  return initialState
}

const getNextDayState = initialState => {
  const nextState = {}

  for (let cycle in initialState) {
    if (cycle === '0') {
      nextState[8] ? nextState[8] += initialState[cycle] : nextState[8] = initialState[cycle]
      nextState[6] ? nextState[6] += initialState[cycle] : nextState[6] = initialState[cycle]
    } else {
      nextState[cycle - 1] ? nextState[cycle - 1] += initialState[cycle] : nextState[cycle - 1] = initialState[cycle]
    }
  }
  return nextState
}

const getLifecycle = (input, day) => {
  let count = day
  let state = getInitialState(input)

  while (count !== 0) {
    state = getNextDayState(state)
    count--
  }

  return state
}

const countLanternFish = lanternFish => {
  return Object.values(lanternFish).reduce((a, b) => a + b, 0)
}

const getLanternFishCountAfterNDays = (input, day) => {
  const lanternFish = getLifecycle(input, day)
  const count = countLanternFish(lanternFish)
  return count
}

const lanternFish = parseInput(path.resolve(__dirname, './input.txt'), ',')
const totalFishPartOne = getLanternFishCountAfterNDays(lanternFish, 80)
const totalFishPartTwo = getLanternFishCountAfterNDays(lanternFish, 256)
const partOneSolution = `🎄🎄🎄 ${totalFishPartOne} 🎄🎄🎄`
const partTwoSolution = `🎄🎄🎄 ${totalFishPartTwo} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(partOneSolution));
// console.log(chalk.green.bgRed(partTwoSolution));

module.exports = {
  countLanternFish,
  getInitialState,
  getLanternFishCountAfterNDays,
  getLifecycle,
  getNextDayState
}
