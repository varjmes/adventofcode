const { getAllOccurences, getOccurences } = require('../part-1/index')

describe('Part One', () => {
  describe('#getAllOccurences', () => {
    it('should return the correct number of digit occurences', () => {
      const inputs = [
        'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
        'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
        'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
        'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
        'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea',
        'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb',
        'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe',
        'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef',
        'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb',
        'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce'
      ]
      const expected = [
        8, 4, 7, 8, 1, 1, 1, 7, 1, 4, 8, 7, 8, 4, 1, 8, 4, 4, 8, 1, 8, 7, 1, 7, 4, 1
      ]

      expect(getAllOccurences(inputs, [1, 4, 7, 8])).toEqual(expected)
    });
  });
  
  describe('#getOccurences', () => {
    it('should return the correct number of digit occurences', () => {
      const digits = [1, 4, 7, 8]
      const displays = ['cg', 'cg', 'fdcagb', 'cbg']
      const expected = [1, 1, 7]
      expect(getOccurences(displays, digits)).toStrictEqual(expected)
    });
  });
}); 
