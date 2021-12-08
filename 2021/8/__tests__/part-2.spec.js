const { decodeOutput, decodeAllOutputs, generateKey, sumOutputs} = require('../part-2/index')

describe('Part Two', () => {  
  describe('#decodeOutput', () => {
    it('should return the correct output', () => {
      const input = 'acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf'
      const expected = '5353'
      expect(decodeOutput(input)).toEqual(expected)
    });
  });

  describe('#decodeAllOutputs', () => {
    it('should decode all outputs', () => {
      const inputs = [
        'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
        'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
        'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
        'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb'
      ]
      const result = decodeAllOutputs(inputs)
      const expected = ['8394', '9781', '1197', '9361']
      expect(result).toEqual(expected)
    });
    
  });
  
  describe('#generateKey', () => {
    it('should return the correct key', () => {
      const signals = 'acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab'
      const expected = {
        'abcdefg': '8',
        'abcdef': '9',
        'bcdef': '5',
        'acdfg': '2',
        'abcdf': '3',
        'abd': '7',
        'bcdefg': '6',
        'abef': '4',
        'abcdeg': '0',
        'ab': '1'
      }

      expect(generateKey(signals)).toStrictEqual(expected)
    });
  });

  describe('#sumOutputs', () => {
    it('should return a sum of all decoded outputs', () => {
      const outputs = ['8394', '9781', '1197', '9361', '4873', '8418', '4548', '1625', '8717', '4315']
      const expected = 61229

      expect(sumOutputs(outputs)).toEqual(expected)
    });
    
  });
  
}); 
