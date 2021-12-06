const { countLanternFish, getInitialState, getLanternFishCountAfterNDays, getLifecycle, getNextDayState } = require('../index')

describe('Challenge', () => {
  describe('#getInitialState', () => {
    it('should return and object of counts for lantern fish on each day of their cycle', () => {
      const input = [3, 4, 3, 1, 2]
      const expected = {
        1: 1,
        2: 1,
        3: 2,
        4: 1
      }

      expect(getInitialState(input)).toStrictEqual(expected)
    });
  });

  describe('#getNextDaysState', () => {
    it('should return an object full of fish on their next cycle', () => {
      const initialState = {
        2: 1,
        3: 2,
        4: 1
      }
      const expected = {
        1: 1,
        2: 2,
        3: 1
      }

      expect(getNextDayState(initialState)).toStrictEqual(expected)
    });

    it('should have fish in state "8" if fish reach the end of their birth cycle', () => {
      const initialState = {
        0: 1,
        1: 2,
        2: 1
      }
      const expected = {
        0: 2,
        1: 1,
        6: 1,
        8: 1
      }

      expect(getNextDayState(initialState)).toStrictEqual(expected)
    });
  });

  describe('#getLifecycle', () => {
    it('should return the end state of the given day', () => {
      const input = [3, 4, 3, 1, 2]
      const day = 18
      const expected = {
        0: 3,
        1: 5,
        2: 3,
        3: 2,
        4: 2,
        5: 1,
        6: 5,
        7: 1,
        8: 4
      }

      expect(getLifecycle(input, day)).toStrictEqual(expected)
    });
  });

  describe('#countLanternFish', () => {
    it('should return the correct number of Lantern Fish', () => {
      const lanternFish = {
        0: 3,
        1: 5,
        2: 3,
        3: 2,
        4: 2,
        5: 1,
        6: 5,
        7: 1,
        8: 4
      }
      expect(countLanternFish(lanternFish)).toEqual(26)
    });
  });

  describe('#getLanternFishCountAfterNDays', () => {
    it('should return the correct number of lantern fish', () => {
      const input = [3, 4, 3, 1, 2]
      const result = getLanternFishCountAfterNDays(input, 80)
      const expected = 5934
      expect(result).toEqual(expected)
    });
  });
}); 
