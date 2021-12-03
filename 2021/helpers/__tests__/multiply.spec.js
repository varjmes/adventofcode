const { multiply } = require('../index')
describe('#multiply', () => {
  it('should multiply two numbers', () => {
    const result = multiply(10, 15)
    expect(result).toBe(150)
  });
});
