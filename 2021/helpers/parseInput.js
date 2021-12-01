const fs = require('fs')
const parseInput = (filename, splitter) => {
  return fs.readFileSync(filename).toString().split(splitter).filter(entry => entry)
}

module.exports = parseInput
