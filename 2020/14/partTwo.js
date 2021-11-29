// --- Part Two ---

// A version 2 decoder chip doesn't modify the values being written at all. Instead, it acts as a memory address decoder. Immediately before a value is written to memory, each bit in the bitmask modifies the corresponding bit of the destination memory address in the following way:

// - If the bitmask bit is 0, the corresponding memory address bit is unchanged.
// - If the bitmask bit is 1, the corresponding memory address bit is overwritten with 1.
// - If the bitmask bit is X, the corresponding memory address bit is floating.

const parseInput = require('../helpers/parseInput')

const input = parseInput('input.txt', '\n')
const regex = /^mem\[(\d+)\] = (\d+)$/
const memory = []
let mask, maskAsNum

const state = {
  mask: '',
  memory: {}
}

const decToBinary = dec => {
  const binary = Number(dec).toString(2).split('').map(Number)
  const empty = new Array(36 - binary.length).fill(0);

  return empty.concat(binary)

}

const maskMem = (mask, mem) => {
  return mem.map((m, i) => {
    if (mask[i] !== 0) {
      return mask[i]
    }

    return m
  })
}

const getFloatingMemoryPlaces = mask => {
  if (!mask.includes('X')) return mask

  return [
    getFloatingMemoryPlaces(mask.replace('X', '0')),
    getFloatingMemoryPlaces(mask.replace('X', '1')),
  ].flat()
};

for (let i = 0; i < input.length; i++) {
  // if (i === 5) break
  if (input[i].startsWith('mask')) {
    const mask = input[i].replace('mask = ', '')
    const maskAsNum = mask.split('').map(val => val === 'X' ? 'X' : Number(val))
    state.mask = maskAsNum
  } else {
    const [,memPlace, num] = input[i].match(regex)
    const value = num.toString(2)
    const memPlaceBinary = decToBinary(memPlace)
    const maskedMem = maskMem(state.mask, memPlaceBinary)
    const maskPermutations = getFloatingMemoryPlaces(maskedMem.join('')).map(mask => {
      return parseInt(mask, 2)
    });

    for (const permutation of maskPermutations) {
      state.memory[permutation] = Number(value);
    }
  }
}

const sum = Object.values(state.memory).reduce((a, b) => a + b)
console.log(sum)