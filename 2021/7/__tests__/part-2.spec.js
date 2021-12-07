const { crabWalk, fuelCount, getMostEfficientCrabWalk, objectifyCrabs } = require('../part-2/index')

describe('Part Two', () => {
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
      const expected = [15, 10, 10, 6, 6, 6, 1, 3, 45, 66]
      expect(crabWalk(crabs, 5, 16)).toEqual(expected)
    });
    
  });

  describe('#fuelCount', () => {
    it('should sum an array of fuels', () => {
      const fuel = [15, 10, 10, 6, 6, 6, 1, 3, 45, 66]
      const expected = 168
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
        fuelCount: 168,
        position: 5
      }
      expect(getMostEfficientCrabWalk(crabs)).toStrictEqual(expected)
    });
  });
}); 
