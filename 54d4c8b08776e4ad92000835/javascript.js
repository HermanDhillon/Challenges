var isPP = function(n){
  for(let m = 2 ; m <= Math.sqrt(n); m++){
    let k = (Math.log(n) / Math.log(m)).toFixed(5);
    if(k%1 === 0){
      return [m, Math.round(k)]
    }
  }
  return null
}