const parseInput = require('../helpers/parseInput')
const input = parseInput('input.txt', ',').map(Number)

const lastSeen = new Map();

let last = input[0];
for (let i = 1; i < 30000000; i++) {
  let next = 0;
  if (i < input.length) {
    next = input[i];
  } else if (lastSeen.has(last)) {
    const turn = lastSeen.get(last);
    next = i - turn;
  }

  lastSeen.set(last, i);
  last = next;
}

console.log(last)
console.log(lastSeen.get(last))