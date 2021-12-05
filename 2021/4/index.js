const chalk = require('chalk');
const path = require('path');
const { multiply, parseInput } = require('../helpers')

const [numbers, ...boards] = parseInput(path.resolve(__dirname, './input.txt'), '\n\n').map(input => {
  return input.split('\n').filter(line => line).map(input => input.split(' ').filter(number => number !== ''))
})
const parsedNumbers = numbers[0][0].split(',')

class BingoBoard {
  constructor(numbers, lines) {
    this.numbers = numbers
    this.lines = lines
    this.hasWinningLine = false
    this.winningNumber = 0
  }

  rows() {
    return this.lines
  }

  columns() {
    const columns = this.lines.map((col, i) => {
        return this.lines.map(row => {
            return row[i];
        }).filter(item => item);
    })

    return columns
  }

  checkLines(number) {
    const r = this.rows()
    const c = this.columns()

    if (this.hasWinningLine) return
    for (let i = 0; i < r.length; i++) {
      if (r[i].every(n => Number.isInteger(n))) {
        this.hasWinningLine = true
        this.winningNumber = number
        break
      }
    }

    if (this.hasWinningLine) return
    for (let i = 0; i < r.length; i++) {
      if (c[i].every(n => Number.isInteger(n))) {
        this.hasWinningLine = true
        this.winningNumber = number
        break
      }
    }
  }

  markNumber(number) {
    if (this.hasWinningLine) return
    this.lines.map((line, i) => {
      return line.map((n, j) => {
        if (n === number) {
          this.lines[i][j] = parseInt(this.lines[i][j])
        }
      })
    })
  }
}

const markBoards = bingoBoards => {
  for (let number of parsedNumbers) {
    for (let board of bingoBoards) {
      board.markNumber(number);
      board.checkLines(number);
    }
  }
}

const sumUnmarked = board => {
  let sum = 0
  board.lines.map(line => {
    line.map(number => {
      if (typeof number === 'string') {
        sum += parseInt(number)
      }
    })
  })
  return sum
}

const getWinningBoard = boards => {
  let winner

  for (let board of boards) {
    if (winner) {
      if (parsedNumbers.indexOf(board.winningNumber) < parsedNumbers.indexOf(winner.winningNumber)) {
        winner = board
      }
    } else {
      winner = board
    }
  }
  return winner
}

const getLosingBoard = boards => {
  let loser

  for (let board of boards) {
    if (loser) {
      if (parsedNumbers.indexOf(board.winningNumber) > parsedNumbers.indexOf(loser.winningNumber)) {
        loser = board
      }
    } else {
      loser = board
    }
  }
  return loser
}

const bingoBoards = boards.map(board => {
  return new BingoBoard(parsedNumbers, board)
})

markBoards(bingoBoards)

const winningBoard = getWinningBoard(bingoBoards)
const losingBoard = getLosingBoard(bingoBoards)
const partOneSolution = multiply(sumUnmarked(winningBoard), winningBoard.winningNumber)
const partTwoSolution = multiply(sumUnmarked(losingBoard), losingBoard.winningNumber)

// console.log(chalk.red.bgGreen(`🎄🎄🎄 ${partOneSolution} 🎄🎄🎄`))
// console.log(chalk.green.bgRed(`🎄🎄🎄 ${partTwoSolution} 🎄🎄🎄`))
