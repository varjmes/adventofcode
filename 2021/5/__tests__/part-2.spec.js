const { countOverlappingPoints, plotMap, plotMapCoOrd, getOverlappingPoints } = require('../part-2/index')

describe('Part Two', () => {
  describe('#countOverlappingPoints', () => {
    it('should count the amount of overlapping points', () => {
      const inputs = ['0,9 -> 5,9', '8,0 -> 0,8', '9,4 -> 3,4', '2,2 -> 2,1', '7,0 -> 7,4', '6,4 -> 2,0', '0,9 -> 2,9', '3,4 -> 1,4', '0,0 -> 8,8', '5,5 -> 8,2']
      const result = countOverlappingPoints(inputs)
      expect(result).toEqual(12)
    });
  });
  
  describe('#plotMap', () => {
    const inputs = ['0,9 -> 5,9', '8,0 -> 0,8', '9,4 -> 3,4', '2,2 -> 2,1', '7,0 -> 7,4', '6,4 -> 2,0', '0,9 -> 2,9', '3,4 -> 1,4', '0,0 -> 8,8', '5,5 -> 8,2']
  
    const expected = {
      '0': [1, , 1, , , , , 1, 1],
      '1': [, 1, 1, 1, , , , 2],
      '2': [, , 2, , 1, , 1, 1, 1],
      '3': [, , , 1, , 2, , 2],
      '4': [, 1, 1, 2, 3, 1, 3, 2, 1, 1],
      '5': [, , , 1, , 2],
      '6': [, , 1, , , , 1],
      '7': [, 1, , , , , , 1],
      '8': [1, , , , , , , , 1],
      '9': [2, 2, 2, 1, 1, 1]
    }

    expect(plotMap(inputs)).toStrictEqual(expected)
  });
  
  describe('#plotMapCoOrd', () => {
    it('should generate a map if neither x or y equal eachother', () => {
      const input = '1,1 -> 3,3'
      const expected = {
        '1': [, 1],
        '2': [, , 1],
        '3': [, , , 1]
      }

      expect(plotMapCoOrd({}, input)).toStrictEqual(expected)
    });

    it('should generate a map if y1 = y2', () => {
      const input = '3,4 -> 1,4';
      const expected = { '4': [, 1, 1, 1] }

      expect(plotMapCoOrd({}, input)).toStrictEqual(expected)
    });

    it('should generate a map if x1 = x2', () => {
      const input = '7,0 -> 7,4'
      const expected = {
        '0': [, , , , , , , 1],
        '1': [, , , , , , , 1],
        '2': [, , , , , , , 1],
        '3': [, , , , , , , 1],
        '4': [, , , , , , , 1]
      }
      expect(plotMapCoOrd({}, input)).toStrictEqual(expected)
    });
  });
  
  describe('#getOverlappingPoints', () => {
    it('should get overlapping points', () => {
      const map = {
        '0': [, , , , , , , 1],
        '1': [, , 1, , , , , 1],
        '2': [, , 1, , , , , 1],
        '3': [, , , , , , , 1],
        '4': [, 1, 1, 2, 1, 1, 1, 2, 1, 1],
        '9': [2, 2, 2, 1, 1, 1]
      }
      const expected = [2, 2, 2, 2, 2]
      expect(getOverlappingPoints(map)).toEqual(expected)
    }); 
  });
}); 
