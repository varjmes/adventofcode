const { getSinglePosition, multiply, planTotalJourney} = require('../part-2/index')

describe('Part Two', () => {
  describe('#getSinglePosition', () => {
    it('should return new co-ordinates depicting a single move', () => {
      expect(getSinglePosition({x:5, y:0, z: 5}, 'forward 8')).toStrictEqual({x: 13, y: 40, z: 5})
    });
  });

  describe('#multiply', () => {
    it('should multiply two numbers', () => {
      const result = multiply(10, 15)
      expect(result).toBe(150)
    });
  });

  describe('#planTotalJourney', () => {
    it('should return the horizontal * vertical direction', () => {
      const directions = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
      expect(planTotalJourney({x: 0, y: 0, z: 0}, directions)).toBe(900)
    });
  });
});
