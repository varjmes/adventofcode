const { calculateScore, completeLine, getIncompleteLines, getMiddleScore, hasIllegalCharacter, scoreAllLines } = require('../part-2/index')

describe('Part Two', () => {
  describe('#calculateScore', () => {
    it('should return the correct score of the completed line', () => {
      const illegalCharacters = [']', ')', '}', '>']
      const expected = 294
      expect(calculateScore(illegalCharacters)).toEqual(expected)
    })
  });

  describe('#completeLine', () => {
    it('should complete the line', () => {
      const incompleteLine = '[({(<(())[]>[[{[]{<()<>>'
      const expected = ['}', '}', ']', ']', ')', '}', ')', ']']
      expect(completeLine(incompleteLine)).toEqual(expected)
    });
  });
  
  describe('#getIncompleteLines', () => {
    it('should return incomplete lines', () => {
      const lines = [
        '[({(<(())[]>[[{[]{<()<>>',
        '[(()[<>])]({[<{<<[]>>(',
        '{([(<{}[<>[]}>{[]{[(<()>',
        '(((({<>}<{<{<>}{[]{[]{}',
        '[[<[([]))<([[{}[[()]]]',
        '[{[{({}]{}}([{[{{{}}([]',
        '{<[[]]>}<{[{[{[]{()[[[]',
        '[<(<(<(<{}))><([]([]()',
        '<{([([[(<>()){}]>(<<{{',
        '<{([{{}}[<[[[<>{}]]]>[]]'
      ]
      const expected = [
        '[({(<(())[]>[[{[]{<()<>>',
        '[(()[<>])]({[<{<<[]>>(',
        '(((({<>}<{<{<>}{[]{[]{}',
        '{<[[]]>}<{[{[{[]{()[[[]',
        '<{([{{}}[<[[[<>{}]]]>[]]'
      ]

      expect(getIncompleteLines(lines)).toEqual(expected)
    });    
  });

  describe('#getMiddleScore', () => {
    it('should get the middlemost score in the array', () => {
      const scores = [288957, 5566, 1480781, 995444, 294]
      const expected = 288957
      expect(getMiddleScore(scores)).toEqual(expected)
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

  describe('#scoreAllLines', () => {
    it('should return the score of each complete line', () => {
      const lines = [
        '[({(<(())[]>[[{[]{<()<>>',
        '[(()[<>])]({[<{<<[]>>(',
        '(((({<>}<{<{<>}{[]{[]{}',
        '{<[[]]>}<{[{[{[]{()[[[]',
        '<{([{{}}[<[[[<>{}]]]>[]]'
      ]
      const expected = [288957, 5566, 1480781, 995444, 294]
      expect(scoreAllLines(lines)).toEqual(expected)
    });
  });
}); 
