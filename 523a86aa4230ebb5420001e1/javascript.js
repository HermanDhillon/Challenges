function anagrams(word, wordArr) {
  return wordArr.filter(e=> [...word].sort().join("") === [...e].sort().join("") )
  
}

