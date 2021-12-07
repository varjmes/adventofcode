const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const objectifyCrabs = crabArray => {
  const crabs = {}
  for (let crab of crabArray) {
    crabs[crab] ? crabs[crab] += 1 : crabs[crab] = 1
  }
  return crabs
}

const fuelCount = fuel => {
  return fuel.reduce((a, b) => a + b, 0)
}

const crabWalk = (crabs, position) => {
  const fuel = []
  for (let crab in crabs) {
    for (let i = 0; i < crabs[crab]; i++) {
      fuel.push(Math.abs((crab - position)))
    }
  }

  return fuel
}

const getMostEfficientCrabWalk = crabs => {
  const objectifiedCrabs = objectifyCrabs(crabs)
  const mostEfficient = {
    fuelCount: Infinity,
    position: 0
  }

  for (let position in objectifiedCrabs) {
    const walk = crabWalk(objectifiedCrabs, position)
    const fuelUsed = fuelCount(walk)

    if (fuelUsed < mostEfficient.fuelCount) {
      mostEfficient.fuelCount = fuelUsed
      mostEfficient.position = Number(position)
    }
  }

  return mostEfficient
}

// const crabs = parseInput(path.resolve(__dirname, '../input.txt'), ',')
// const string = `🎄🎄🎄 ${getMostEfficientCrabWalk(crabs).fuelCount} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  crabWalk,
  fuelCount,
  getMostEfficientCrabWalk,
  objectifyCrabs
}
