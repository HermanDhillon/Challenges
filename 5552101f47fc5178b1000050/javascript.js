function digPow(n, p){

  let  x = String(n).split("").reduce((a,c,ind) => a + (+c)**(p+ind), 0 )
  
  return x%n ? -1 : x/n
}