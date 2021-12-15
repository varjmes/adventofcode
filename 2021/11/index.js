const path = require('path')
const { parseInput } = require('../../helpers')

let octopi = parseInput(path.resolve(__dirname, '../input.txt'), '\n').map(row => row.split('').map(Number))

const flash = (i, j) => {
  const key = {
    topLeft: [i - 1, j - 1],
    top: [i - 1, j],
    topRight: [i - 1, j + 1],
    left: [i, j - 1],
    right: [i, j + 1],
    bottomLeft: [i + 1, j - 1],
    bottom: [i + 1, j],
    bottomRight: [i + 1, j + 1]
  }

  for (let k in key) {
    const [y, x] = key[k]
    if (octopi[y] && octopi[y][x] !== undefined && typeof octopi[y][x] !== 'string') {
      octopi[y][x] = octopi[y][x] + 1
      if (octopi[y][x] > 9) {
        octopi[y][x] = ''
        flash(y, x)
      }
    }
  }
}

const wiggle = () => {
  for (let i = 0; i < octopi.length; i++) {
    for (let j = 0; j < octopi[i].length; j++) {
      if (typeof octopi[i][j] !== 'string') {
        octopi[i][j] = octopi[i][j] + 1
        if (octopi[i][j] > 9) {
          octopi[i][j] = ''
          flash(i, j)
        }
      }
    }
  }
}

let octopiFinishedWiggling = false
let wiggles = 0
while (!octopiFinishedWiggling) {
  wiggle()
  const flashes = octopi.map(o => {
    return o.filter(c => c === '')
  }).flatMap(x => x)

  if (flashes && flashes.length === 100) {
    octopiFinishedWiggling = true
  }

  octopi = JSON.parse(JSON.stringify(octopi).replace(/""/g, 0))
  wiggles++
}

module.exports = {
  wiggle
}
