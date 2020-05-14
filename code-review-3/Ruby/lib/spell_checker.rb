def spell_checker(input)
  correct_words = ["cat", "music", "dog", "the", "nice", "try", "good", "guess"]
  words = input.split(" ")
  output = []
  words.each do |word|
    if correct_words.include?(word.downcase)
      output << word
    else 
      output << "~#{word}~"
    end
  end
  output.join(" ")
end