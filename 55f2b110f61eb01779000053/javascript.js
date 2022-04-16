function getSum( a,b ){
  let x = 0
  for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
    x += i
  }
  return x
}