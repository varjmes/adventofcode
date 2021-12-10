const { calculateScore, getIllegalCharacters, hasIllegalCharacter } = require('../part-1/index')

describe('Part One', () => {
  describe('#calculateScore', () => {
    it('should return the correct score of all the syntax errors', () => {
      const illegalCharacters = ['}', ')', ']', ')', '>']
      const expected = 26397
      expect(calculateScore(illegalCharacters)).toEqual(expected)
    });
    
  });
  
  describe('#hasIllegalCharacter', () => {
    it('should return the first illegal character', () => {
      const line = '{([(<{}[<>[]}>{[]{[(<()>'
      const expected = '}'
      expect(hasIllegalCharacter(line)).toEqual(expected)
    });

    it('should return undefined if no illegal character', () => {
      const line = '[({(<(())[]>[[{[]{<()<>>'
      const expected = undefined
      expect(hasIllegalCharacter(line)).toEqual(expected)
    });
  });

  describe('#getIllegalCharacters', () => {
    it('should get all illegal characters', () => {
      const lines = ['{([(<{}[<>[]}>{[]{[(<()>', '[[<[([]))<([[{}[[()]]]', '[{[{({}]{}}([{[{{{}}([]', '[<(<(<(<{}))><([]([]()', '<{([([[(<>()){}]>(<<{{']

      const expected = ['}', ')', ']', ')', '>']
      expect(getIllegalCharacters(lines)).toEqual(expected)
    });
    
  });
  
}); 
