// --- Day 14: Day 15: Rambunctious Recitation ---
// In this game, the players take turns saying numbers. They begin by taking turns reading from a list of starting numbers (your puzzle input). Then, each turn consists of considering the most recently spoken number:

// If that was the first time the number has been spoken, the current player says 0.
// Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.

const parseInput = require('../helpers/parseInput')
const input = parseInput('input.txt', ',').map(Number)

let state = {
  turns: 0,
  numberLastSpoken: 0
}

for (let num of input) {
  const turn = state.turns + 1
  state[num] = {
    penultimateTurnSpoken: turn,
    turnLastSpoken: turn,
    timesSpoken: 1
  }

  state.turns++
  state.numberLastSpoken = num
}

const takeTurn = state => {
  const { numberLastSpoken, turns } = state
  const { timesSpoken } = state[numberLastSpoken]
  if (timesSpoken === 1) {
    const lastZero = state[0] ? state[0].turnLastSpoken : turns + 1
    const spokenZero = state[0] ? state[0].turnLastSpoken : 1
    return {
      turns: turns + 1,
      numberLastSpoken: 0,
      '0': {
        penultimateTurnSpoken: lastZero,
        turnLastSpoken: turns + 1,
        timesSpoken: spokenZero
      }
    }
  } else {
    const { turnLastSpoken, penultimateTurnSpoken} = state[numberLastSpoken]
    const nextNumber = turnLastSpoken - penultimateTurnSpoken
    if (state[nextNumber]) {
      return {
        turns: turns + 1,
        numberLastSpoken: nextNumber,
        [nextNumber]: {
          penultimateTurnSpoken: state[nextNumber].turnLastSpoken,
          turnLastSpoken: turns + 1,
          timesSpoken: state[nextNumber].timesSpoken + 1
        }
      }
    } else {
      return {
        turns: turns + 1,
        numberLastSpoken: nextNumber,
        [nextNumber]: {
          penultimateTurnSpoken: turns + 1,
          turnLastSpoken: turns + 1,
          timesSpoken: 1
        }
      }
    }
  }
}

while (state.turns !== 30000000) {
  let nextTurn = takeTurn(state)
  state = { ...state, ...nextTurn}
}
// let nextTurn = takeTurn(state)
// state = { ...state, ...nextTurn}
console.log(state.numberLastSpoken)
