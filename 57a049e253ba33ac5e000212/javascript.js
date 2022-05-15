function factorial(n){

  
 return n ? Array(n).fill(1).map((_,i)=> n-i).reduce((a,c)=> a*c) : 1
}