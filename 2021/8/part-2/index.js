const chalk = require('chalk')
const path = require('path')
const { parseInput } = require('../../helpers')

const decodeOutput = input => {
  const [signal, output] = input.split(' | ')
  const key = generateKey(signal)
  const outputArray = output.split(' ').map(o => o.split('').sort().join(''))

  let outputString = ''
  for (let o of outputArray) {
    outputString += key[o]
  }

  return outputString
}

const decodeAllOutputs = inputs => {
  const decoded = []
  for (let input of inputs) {
    decoded.push(decodeOutput(input))
  }

  return decoded
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

// TODO: This is an abomination. Redo it completely.
const generateKey = signal => {
  const key = {}
  const signalsArray = signal.split(' ').map(s => s.split('').sort().join(''))
  for (let signal of signalsArray) {
    switch (signal.length) {
      case 2:
        key[signal] = '1'
        break
      case 3:
        key[signal] = '7'
        break
      case 4:
        key[signal] = '4'
        break
      case 7:
        key[signal] = '8'
        break
      default:
        break
    }
  }


  const one = getKeyByValue(key, '1')
  const four = getKeyByValue(key, '4')
  for (let signal of signalsArray) {
    if (!key[signal]) {
      if (signal.includes(one[0]) && signal.includes(one[1])) {
        if (signal.length === 5) {
          key[signal] = '3';
        } else if (
          signal.includes(four[0]) && signal.includes(four[1]) && signal.includes(four[2]) && signal.includes(four[3])
        ) {
          key[signal] = '9';
        } else {
          key[signal] = '0';
        }
      } else if (!key[signal] && signal.length === 6) {
        key[signal] = '6';
      }
    }
  }

  const six = getKeyByValue(key, '6')
  for (let signal of signalsArray) {
    if (!key[signal]) {
      const sharedWithSix = six.split('').filter(n => signal.includes(n)).length
      if (sharedWithSix === 5) {
        key[signal] = '5'
      } else {
        key[signal] = '2'
      }
    }
  }

  return key
}

const sumOutputs = outputs => {
  return outputs.reduce((a, b) => a + parseInt(b), 0)
}

// const inputs = parseInput(path.resolve(__dirname, '../input.txt'), '\n')
// const string = `🎄🎄🎄 ${sumOutputs(decodeAllOutputs(inputs))} 🎄🎄🎄`
// console.log(chalk.green.bgRed(string));

module.exports = {
  decodeAllOutputs,
  decodeOutput,
  generateKey,
  sumOutputs
}
