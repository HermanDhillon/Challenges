function findOdd(A) {
  let count = 0
  for(let i = 0; i<A.length ; i++){
   count = A.reduce((total,x) => (x==A[i] ? total+1 : total), 0)
    if(count%2 !== 0){
      return A[i]
    }
  }
}