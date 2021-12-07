const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const objectifyCrabs = crabArray => {
  const crabs = {}
  for (let crab of crabArray.map(Number)) {
    crabs[crab] ? crabs[crab] += 1 : crabs[crab] = 1
  }
  return crabs
}

const fuelCount = fuel => {
  return fuel.reduce((a, b) => a + b, 0)
}

const crabWalk = (crabs, currentPosition, largestPosition) => {
  const fuel = []

  for (let i = 0; i <= largestPosition; i++) {
    if (crabs[i]) {
      for (let j = 0; j < crabs[i]; j++) {
        const difference = Math.abs(i - currentPosition)
        fuel.push((difference / 2) * (1 + difference))
      }
    }
  }

  return fuel
}

const getMostEfficientCrabWalk = crabs => {
  const objectifiedCrabs = objectifyCrabs(crabs)
  const positions = Object.keys(objectifiedCrabs)
  const largestPosition = Number(positions[positions.length - 1])

  const mostEfficient = {
    fuelCount: Infinity,
    position: 0
  }

  for (let i = 0; i <= largestPosition; i++) {
    const walk = crabWalk(objectifiedCrabs, i, largestPosition)
    const fuelUsed = fuelCount(walk)

    if (fuelUsed < mostEfficient.fuelCount) {
      mostEfficient.fuelCount = fuelUsed
      mostEfficient.position = i
    }
  }

  return mostEfficient
}

// const crabs = parseInput(path.resolve(__dirname, '../input.txt'), ',')
// const string = `🎄🎄🎄 ${getMostEfficientCrabWalk(crabs).fuelCount} 🎄🎄🎄`
// console.log(chalk.green.bgRed(string));

module.exports = {
  crabWalk,
  fuelCount,
  getMostEfficientCrabWalk,
  objectifyCrabs
}
