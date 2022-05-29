function countPositivesSumNegatives(input) {
  if(!input || input.length === 0){
    return []
  }
  let pos = 0
  let sum = 0
  input.forEach((c)=> c > 0 ? pos++ : sum+=c )
  return [ pos , sum] ;
}