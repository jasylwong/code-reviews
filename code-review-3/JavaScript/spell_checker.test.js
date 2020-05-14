const spell_checker = require('./spell_checker')

describe('spell checker', () => {
  describe('single word', () => {
    test('three letter correct word returns same word', () => {
      expect(spell_checker('cat')).toEqual('cat')
    })

    test('three letter incorrect word returned in between tildas', () => {
      expect(spell_checker('cit')).toEqual('~cit~')
    })

    test('five letter correct word returns same word', () => {
      expect(spell_checker('music')).toEqual('music')
    })

    test('five letter incorrect word returned in between tildas', () => {
      expect(spell_checker('mxsic')).toEqual('~mxsic~')
    })
  })

  describe('two words', () => {
    test('two correct words returns same words', () => {
      expect(spell_checker('the Dog')).toEqual('the Dog')
    })

    test('two incorrect words returns in between tildas', () => {
      expect(spell_checker('ths dTg')).toEqual('~ths~ ~dTg~')
    })
  })

  // describe('Full sentences with punctuation marks', () => {
  //   test('Capitals and full stops', () => {
  //     expect(spell_checker('Hello')).toEqual('the Dog')
  //   })
  // })

  describe('edge cases', () => {
    test('empty string throws an error', () => {
      expect(() => {spell_checker('')}).toThrow('Empty string not allowed')
    })

    test('nil input throws an error', () => {
      expect(() => {spell_checker()}).toThrow('Null input not allowed')
    })

    test('non string input throws an error', () => {
      expect(() => {spell_checker(1234)}).toThrow('Non string input not allowed')
    })
  })
})