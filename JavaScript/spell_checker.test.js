const spell_checker = require('./spell_checker')

describe('spell checker', () => {
  describe('single word', () => {
    test('three letter correct word returns same word', () => {
      expect(spell_checker('cat')).toEqual('cat')
    })
  })
})