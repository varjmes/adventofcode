// --- Day 14: Docking Data ---

// The initialization program (your puzzle input) can either update the bitmask or write a value to memory. Values and memory addresses are both 36-bit unsigned integers. For example, ignoring bitmasks for a moment, a line like mem[8] = 11 would write the value 11 to memory address 8.

// The bitmask is always given as a string of 36 bits, written with the most significant bit (representing 2^35) on the left and the least significant bit (2^0, that is, the 1s bit) on the right. The current bitmask is applied to values immediately before they are written to memory: a 0 or 1 overwrites the corresponding bit in the value, while an X leaves the bit in the value unchanged.

const parseInput = require('../helpers/parseInput')

const input = parseInput('input.txt', '\n')
const regex = /^mem\[(\d+)\] = (\d+)$/
const memory = []
let mask, maskAsNum

const decToBinary = dec => {
  const binary = Number(dec).toString(2).split('').map(Number)
  const empty = new Array(36 - binary.length).fill(0);

  return empty.concat(binary)

}

const maskValue = (mask, value) => {
  return value.map((val, i) => {
    if (!Number.isNaN(mask[i])) return mask[i]
    return val
  })
}

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith('mask')) {
    mask = input[i].replace('mask = ', '')
    maskAsNum = mask.split('').map(val => val === 'X' ? undefined : val).map(Number)
  } else {
    const [,memPlace, num] = input[i].match(regex)
    const binary = decToBinary(num)
    // console.log(maskAsNum)
    const maskedValue = maskValue(maskAsNum, binary)
  
    memory[memPlace] = maskedValue
  }
}

const sum = memory.filter(mem => mem).map(arr => {
  return parseInt(BigInt(arr.join('')), 2)
}).reduce((a, b) => a + b)

// 165
console.log(sum)