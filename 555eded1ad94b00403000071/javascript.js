function SeriesSum(n)
{
  // Happy Coding ^_^
  let num = 0
  if(n===0){
    return (num).toFixed(2)
  }else{
    num += 1
    let denominator = 4
    for (i=1;i<n;i++){
      num += (1/denominator)
      denominator += 3
    }
    return (num).toFixed(2)
  }
  
}