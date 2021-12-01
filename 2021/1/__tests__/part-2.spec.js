const { countDepthIncreases, generateSlidingWindowDepths } = require('../part-2/index')

describe('Part Two', () => {
  describe('#countDepthIncreases', () => {
    it('returns 0 if no measurements are provided', () => {
      const result = countDepthIncreases(undefined)
      expect(result).toEqual(0);
    });
  
    it('returns 0 if less than 3 measurements are provided', () => {
      const result = countDepthIncreases([1, 2])
      expect(result).toEqual(0);
    });
  
    it('provide the number of measurements that were an increase', () => {
      const result = countDepthIncreases([
        199, 200, 208, 210, 200, 207, 240, 269, 260, 263
      ])
      expect(result).toEqual(5);
    });
  });

  describe('#generateSlidingWindowDepths', () => {
    it('should return an array of summated depths', () => {
      const result = generateSlidingWindowDepths([
        199, 200, 208, 210, 200, 207, 240, 269, 260, 263
      ], 3)
      const expected = [607, 618, 618, 617, 647, 716, 769, 792]
      expect(result).toEqual(expected);
    });
  });
});
