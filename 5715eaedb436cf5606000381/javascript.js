function positiveSum(arr) {
  return arr.filter(e => e>0).reduce((t,c) => t+c, 0)
}