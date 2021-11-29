// --- Day 14: Day 15: Rambunctious Recitation ---
// In this game, the players take turns saying numbers. They begin by taking turns reading from a list of starting numbers (your puzzle input). Then, each turn consists of considering the most recently spoken number:

// If that was the first time the number has been spoken, the current player says 0.
// Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.

const parseInput = require('../helpers/parseInput')
const input = parseInput('input.txt', ',').map(Number)

let state = new Map()
state.set('turns', 0)
state.set('numberLastSpoken', 0)

for (let num of input) {
  const turn = state.get('turns') + 1
  state.set(num, {
    penultimateTurnSpoken: turn,
    turnLastSpoken: turn,
    timesSpoken: 1   
  })

  state.set('turns', turn)
  state.set('numberLastSpoken', num)
}

const takeTurn = state => {
  const numberLastSpoken = state.get('numberLastSpoken')
  const turns = state.get('turns')
  const timesSpoken = state.get(numberLastSpoken).timesSpoken

  if (timesSpoken === 1) {
    const lastZero = state.get(0) ? state.get(0).turnLastSpoken : turns + 1
    const spokenZero = state.get(0) ? state.get(0).turnLastSpoken : 1

    const nextState = new Map()
    nextState.set('turns', turns + 1)
    nextState.set('numberLastSpoken', 0)
    nextState.set(0, {
      penultimateTurnSpoken: lastZero,
      turnLastSpoken: turns + 1,
      timesSpoken: spokenZero
    })

    return nextState
  } else {
    const { turnLastSpoken, penultimateTurnSpoken } = state.get(numberLastSpoken)
    const nextNumber = turnLastSpoken - penultimateTurnSpoken
    if (state.get(nextNumber)) {
      const nextState = new Map()
      nextState.set('turns', turns + 1)
      nextState.set('numberLastSpoken', nextNumber)
      nextState.set(nextNumber, {
        penultimateTurnSpoken: state.get(nextNumber).turnLastSpoken,
        turnLastSpoken: turns + 1,
        timesSpoken: state.get(nextNumber).timesSpoken + 1
      })

      return nextState
    } else {
      const nextState = new Map()
      nextState.set('turns', turns + 1)
      nextState.set('numberLastSpoken', nextNumber)
      nextState.set(nextNumber, {
        penultimateTurnSpoken: turns + 1,
        turnLastSpoken: turns + 1,
        timesSpoken: 1
      })
      return nextState
    }
  }
}

while (state.get('turns') !== 30000000) {
  if (state.get('turns') === 10000) {
    console.log('yeah ok')
  }
  if (state.get('turns') === 100000) {
    console.log('yeah')
  }

  if (state.get('turns') === 1000000) {
    console.log('ok')
  }

  let nextTurn = takeTurn(state)
  state = new Map([...state, ...nextTurn])
}
// let nextTurn = takeTurn(state)
// state = { ...state, ...nextTurn}
console.log(state.get('numberLastSpoken'))

// console.log(state)