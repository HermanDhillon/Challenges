function matrixAddition(a, b){
 let sumArr = []

 for(let i = 0; i<a.length; i++){
  sumArr.push([])
  for(let j = 0; j<b.length; j++){
    sumArr[i].push(a[i][j] + b[i][j])
  } 
 }
  return sumArr
}