function sumOfMinimums(arr) {
  return arr.reduce((a,c)=> a + Math.min(...c), 0)
}