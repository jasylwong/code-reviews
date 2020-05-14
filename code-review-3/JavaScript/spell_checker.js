function spell_checker(sentence) {
  if (sentence === '') throw new Error('Empty string not allowed') 
  if (!sentence) throw new Error('Null input not allowed') 
  if (typeof sentence !== "string") throw new Error('Non string input not allowed') 
  
  let word_bank = ['cat', 'music', 'the', 'dog']
  words = sentence.split(' ')
  output = []

  words.forEach(word => {
    if (word_bank.includes(word.toLowerCase())) {
      output.push(word);
    } else {
      output.push(`~${word}~`);
    }
  }
  )

  return output.join(' ');
}

module.exports =  spell_checker;