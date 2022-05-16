function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  return Math.max(m , n)%Math.min(m, n)
}