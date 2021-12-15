const { getLowPoints, getRiskPoints, sumRiskPoints } = require('../part-1/index')

describe('Part One', () => {
  describe('#getLowPoints', () => {
    it('should get the low points', () => {
      const cave = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]
      const expected = [1, 0, 5, 5]
      expect(getLowPoints(cave)).toEqual(expected)
    });
    
  });
  
  describe('#getRiskPoints', () => {
    it('should get the risk points', () => {
      const heights = [1, 0, 5, 5]
      const expected = [2, 1, 6, 6]
      expect(getRiskPoints(heights)).toEqual(expected)
    });
  });

  describe('#sumRiskPoints', () => {
    it('should sum the risk points', () => {
      const riskPoints = [2, 1, 6, 6]
      const expected = 15
      expect(sumRiskPoints(riskPoints)).toEqual(expected)
    });
  });
}); 
