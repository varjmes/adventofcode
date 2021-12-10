const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const calculateScore = illegalCharacters => {
  const key = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
  }

  return illegalCharacters.reduce((prevChar, currentChar) => prevChar + key[currentChar], 0)
}
const getIllegalCharacters = lines => {
  const illegalCharacters = []
  for (let line of lines) {
    illegalCharacters.push(hasIllegalCharacter(line))
  }

  return illegalCharacters.filter(c => c)
}

const hasIllegalCharacter = line => {
  const characters = line.split('')
  const openingTags = []
  let illegalCharacter

  const key = {
    '}': '{',
    ')': '(',
    ']': '[',
    '>': '<'
  }

  characterLoop:
  for (let character of characters) {
    switch (character) {
      case '{':
      case '(':
      case '[':
      case '<':
        openingTags.push(character)
        break
      case '}':
      case ')':
      case ']':
      case '>':
        if (key[character] === openingTags[openingTags.length - 1]) {
          openingTags.pop(openingTags.length - 1)
        }
        else if (key[character] !== openingTags[openingTags.length - 1]) {
          illegalCharacter = character
          break characterLoop
        }
      default:
        break
    }
  }

  return illegalCharacter
}

// const lines = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
// const illegalCharacters = getIllegalCharacters(lines)
// const string = `🎄🎄🎄 ${calculateScore(illegalCharacters)} 🎄🎄🎄`
// console.log(chalk.red.bgGreen(string));

module.exports = {
  calculateScore,
  getIllegalCharacters,
  hasIllegalCharacter
}
