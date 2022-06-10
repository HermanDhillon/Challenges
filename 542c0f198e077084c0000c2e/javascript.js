function getDivisorsCnt(n){
   let count = 1
   let inc = n/2 ? 1 : 2
  for(let i = ~~(n/2); i>0 ; i-=inc ){
    if(n%i === 0){
      count++
    }
  }
  return  count 
}