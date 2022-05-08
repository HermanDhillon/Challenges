function twoSum(n, t) {
  let ind = [null, null]
  n.forEach((e,i) => n.forEach((c,j)=> t-e-c === 0 && i !== j ? ind = [i, j] : null))
  return ind 
}