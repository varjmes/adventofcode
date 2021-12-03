const { convertBinaryToDecimal, getLeastCommon, getLifeSupportRating, getMostCommon, getOccurences, getOxygenRating, getScrubberRating } = require('../part-2/index')

describe('Part Two', () => {
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

  describe('#getLifeSupportRating', () => {
    it('should return the life support rating', () => {
      const inputs = ['00100', '11110', '10110']
      const result = getLifeSupportRating(inputs)
      const expected = 120
      expect(result).toBe(expected)
    });
  });
  
  describe('#getOxygenRating', () => {
    it('should get the oxygen rating', () => {
      const inputs = ['00100', '11110', '10110']
      const expected = '11110'
      const result = getOxygenRating(inputs)
      expect(result).toStrictEqual(expected)
    });
  });
  
  describe('#getScrubberRating', () => {
    it('should get the scrubber rating', () => {
      const inputs = ['00100', '11110', '10110']
      const expected = '00100'
      const result = getScrubberRating(inputs)
      expect(result).toStrictEqual(expected)
    });
  });
}); 
