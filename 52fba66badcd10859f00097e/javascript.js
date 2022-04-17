function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O" , "U"]
  return str.split('').map(e => vowels.includes(e)? "" : e).join('')
  
}