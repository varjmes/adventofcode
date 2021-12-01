const countDepthIncreases = require('../part-1/index')

describe('Part One', () => {
  it('returns 0 if no measurements are provided', () => {
    const result = countDepthIncreases(undefined)
    expect(result).toEqual(0);
  });

  it('returns 0 if 1 measurement is provided', () => {
    const result = countDepthIncreases([1])
    expect(result).toEqual(0);
  });

  it('provide the number of measurements that were an increase', () => {
    const result = countDepthIncreases([
      199, 200, 208, 210, 200, 207, 240, 269, 260, 263
    ])
    expect(result).toEqual(7);
  });
});
