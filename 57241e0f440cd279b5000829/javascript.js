function sumMul(n,m){
  if(n>=m){
    return "INVALID"
  }
  let x = 0
  for(let i = n; i < m; i+=n){
    x += i  
  } 
  return x

}