const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const calculateScore = characters => {
  let total = 0;
  const key = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
  };

  for (let character of characters) {
    total = (total * 5) + key[character];
  }

  return total;
}

const completeLine = line => {
  if (typeof line === 'object') {
    console.log(line)
  }
  const characters = line.split('')
  const openingTags = []

  const key = {
    '{': '}',
    '(': ')',
    '[': ']',
    '<': '>'
  }

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
        if (key[openingTags[openingTags.length - 1]] === character) {
          openingTags.pop(openingTags.length - 1)
        }
      default:
        break
    }
  }

  return openingTags.map(o => key[o]).reverse()
}

const getIncompleteLines = lines => {
  const incompleteLines = []
  for (let i = 0; i < lines.length; i++) {
    if (hasIllegalCharacter(lines[i]) === undefined) {
      incompleteLines.push(lines[i])
    }
  }

  return incompleteLines
}

const getMiddleScore = scores => {
  const sortedScores = scores.sort((a, b) => a - b)
  return sortedScores[Math.round((sortedScores.length - 1) / 2)];
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
        } else if (key[character] !== openingTags[openingTags.length - 1]) {
          illegalCharacter = character
          break characterLoop
        }
      default:
        break
    }
  }

  return illegalCharacter
}

const scoreAllLines = lines => {
  return lines.map(line => calculateScore((completeLine(line))))
}

// const lines = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
// const incompleteLines = getIncompleteLines(lines)
// const scores = scoreAllLines(incompleteLines)
// const middleScore = getMiddleScore(scores)
// const string = `🎄🎄🎄 ${middleScore} 🎄🎄🎄`
// console.log(chalk.green.bgRed(string));

module.exports = {
  calculateScore,
  completeLine,
  getIncompleteLines,
  getMiddleScore,
  hasIllegalCharacter,
  scoreAllLines,
}
