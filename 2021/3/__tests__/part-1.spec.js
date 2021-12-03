const { convertBinaryToDecimal, getEpsilonRate, getGammaRate, getPowerConsumption, getLeastCommon, getMostCommon, getOccurences } = require('../part-1/index')

describe('Part One', () => {
  describe('#convertBinaryToDecimal', () => {
    it('return converts a binary string to a decimal number', () => {
      const input = '10110'
      const expected = 22
      const result = convertBinaryToDecimal(input)
      expect(result).toStrictEqual(expected)
    });
  });
  
  describe('#getOccurences', () => {
    it('return the occurrences of 0 and 1 values for the given position', () => {
      const inputs = ['00100', '11110', '10110']
      const expected = { '1': 2, '0': 1 }
      const result = getOccurences(inputs, 0)
      expect(result).toStrictEqual(expected)
    });
  });

  describe('#getPowerConsumption', () => {
    it('should return the power consumption', () => {
      const inputs = ['00100', '11110', '10110']
      const result = getPowerConsumption(inputs)
      const expected = 198
      expect(result).toBe(expected)
    });
  });
  

  describe('#getMostCommon', () => {
    it('should get the most common occurence', () => {
      const input = { '1': 2, '0': 1 }
      const result = getMostCommon(input)
      const expected = '1'
      expect(result).toBe(expected)
    });
  });

  describe('#getLeastCommon', () => {
    it('should get the least common occurence', () => {
      const input = { '1': 2, '0': 1 }
      const result = getLeastCommon(input)
      const expected = '0'
      expect(result).toBe(expected)
    });
  });

  describe('#getGammaRate', () => {
    it('should get the gamma rate', () => {
      const input = ['00100', '11110', '10110']
      const expected = '10110'
      const result = getGammaRate(input)
      expect(result).toBe(expected)
    });
  });
  
  describe('#getEpisilonRate', () => {
    it('should get the episolon rate', () => {
      const input = ['00100', '11110', '10110']
      const expected = '01001'
      const result = getEpsilonRate(input)
      expect(result).toBe(expected)
    });
  });
}); 
