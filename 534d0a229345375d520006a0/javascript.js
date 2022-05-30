function isPowerOfTwo(n){
  return n === 0 ? false : !Boolean(Math.log2(n) % 1 )
  
}