function arithmetic(a, b, o){
  return o[0] === "a" ? a + b : o[0] === "s" ? a - b : o[0] === "m" ? a*b : a/b
}