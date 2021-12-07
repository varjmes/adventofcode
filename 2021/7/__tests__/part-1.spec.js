const { crabWalk, fuelCount, getMostEfficientCrabWalk, objectifyCrabs } = require('../part-1/index')

describe('Part One', () => {
  describe('#crabWalk', () => {
    it('should return an array of fuel usage it would take the crabs to get to the designated position', () => {
      const crabs = {
        0: 1,
        1: 2,
        2: 3,
        4: 1,
        7: 1,
        14: 1,
        16: 1
      }
      const expected = [2, 1, 1, 0, 0, 0, 2, 5, 12, 14]
      expect(crabWalk(crabs, 2)).toEqual(expected)
    });
    
  });

  describe('#fuelCount', () => {
    it('should sum an array of fuels', () => {
      const fuel = [14, 1, 0, 2, 2, 0, 5, 1, 0, 12]
      const expected = 37
      expect(fuelCount(fuel)).toEqual(expected)
    });
  });

  describe('#objectifyCrabs', () => {
    it('should turn the crabs into and object', () => {
      const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
      const expected = {
        0: 1,
        1: 2,
        2: 3,
        4: 1,
        7: 1,
        14: 1,
        16: 1
      }

      expect(objectifyCrabs(input)).toStrictEqual(expected)
    });
  });

  describe('#getMostEfficientCrabWalk', () => {
    it('should get the most fuel efficient crab walk', () => {
      const crabs = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
      const expected = {
        fuelCount: 37,
        position: 2
      }
      expect(getMostEfficientCrabWalk(crabs)).toStrictEqual(expected)
    });
  });
}); 
