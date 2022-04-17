function XO(str) {
  
  return str.toLowerCase().split('').filter(e => e !== "o").length === str.toLowerCase().split('').filter(e => e !== "x").length
}