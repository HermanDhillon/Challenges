function duplicateEncode(word){
  let c = {}
  let arr = word.toLowerCase().split('')
    arr.forEach(e => c[e] = (c[e] +1) || 1)
    
  return arr.map(e => c[e]>1 ? ")" : "(").join("")
}
