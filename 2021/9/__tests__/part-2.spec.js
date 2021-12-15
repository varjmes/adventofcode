const { getBasins, getBasinSize, getLowPoints } = require('../part-2/index')

describe('Part Two', () => {
  describe('#getBasins', () => {
    it('should return all basin sizes', () => {
      const cave = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]
      const expected = [14, 9, 9, 3]
      expect(getBasins(cave)).toEqual(expected)
    });
  });
  
  describe('#getBasinSize', () => {
    it('should return the size of the basin', () => {
      const cave = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]
      const expected = 3
      expect(getBasinSize(cave, [0, 1])).toEqual(expected)
    });
  });

  describe('#getLowPoints', () => {
    it('should get the low points', () => {
      const cave = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
      ]
      const expected = [[0, 1], [0, 9], [2, 2], [4, 6]]
      expect(getLowPoints(cave)).toEqual(expected)
    });
  });
}); 
