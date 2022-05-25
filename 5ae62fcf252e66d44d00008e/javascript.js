function expressionMatter(a, b, c) {
  
  let arr = [
    a * ( b + c ),
    a * b * c,
    a + b + c,
    (a + b) * c
  ]
  return Math.max(...arr)
}