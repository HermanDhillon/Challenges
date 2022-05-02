function towerBuilder(n) {
  let arr = []
  for(let i=1; i<= n; i++) arr.push(" ".repeat(n-i) + "*".repeat(i*2-1) + " ".repeat(n-i))
  return arr  

}