function rowSumOddNumbers(n) {
  let arr = [(n*(n-1))+1]
  for(let i = 1; i<n; i++){
    arr[i] = arr[i-1]+2
  }
  return arr.reduce((a,c)=> a+c)
} 