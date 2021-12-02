const { getSinglePosition, multiply, planTotalJourney} = require('../part-1/index')

describe('Part One', () => {
  describe('#getSinglePosition', () => {
    it('should return new co-ordinates depicting a single move', () => {
      expect(getSinglePosition({x:0, y:0}, 'forward 5')).toStrictEqual({x: 5, y: 0})
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
      expect(planTotalJourney({x: 0, y: 0}, directions)).toBe(150)
    });
  });
});
