require 'spell_checker'

describe 'spell_checker()' do
  describe 'mispelt word cat' do
    it 'returns cit in tildas' do
      expect(spell_checker("cit")).to eq("~cit~")
    end
  end

  describe 'correct word cat' do
    it 'returns cat since spelt correctly' do
      expect(spell_checker("cat")).to eq("cat")
    end
  end

  describe 'incorrect word music' do
    it 'returns ~mxsic~' do
      expect(spell_checker("mxsic")).to eq("~mxsic~")
    end
  end

  describe 'correct word music' do
    it 'returns "music"' do
      expect(spell_checker("music")).to eq("music")
    end
  end

  describe 'two words correct' do
    it 'returns the two words as before' do
      expect(spell_checker("the dog")).to eq("the dog")
    end
  end

  describe 'one word correct, one incorrect' do
    it 'returns correct word as is, the other with tildas' do
      expect(spell_checker("the dtg")).to eq("the ~dtg~")
    end
  end

  describe 'two words incorrect' do
    it 'returns both with tildas' do
      expect(spell_checker("ths dtg")).to eq("~ths~ ~dtg~")
    end
  end

  describe 'two longer words incorrect' do
    it 'returns both with tildas' do
      expect(spell_checker("hyllo wxrld")).to eq("~hyllo~ ~wxrld~")
    end
  end

  describe 'two longer words incorrect' do
    it 'returns both with tildas' do
      expect(spell_checker("hyllo wxrld")).to eq("~hyllo~ ~wxrld~")
    end
  end

  describe 'short sentence, no fullstop, but capitals' do
    it 'returns desired result' do
      expect(spell_checker("Ntce try gdcd gtess")).to eq("~Ntce~ try ~gdcd~ ~gtess~")
    end
  end

  describe 'short sentence, no fullstop, but capitals' do
    it 'returns desired result' do
      expect(spell_checker("Nice try gdcd gtess")).to eq("Nice try ~gdcd~ ~gtess~")
    end
  end
end

