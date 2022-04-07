const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let arr = []
  while(begin <= end){
    arr.push(begin)
    begin += step    
  }
  return arr.reduce((acc, c) => acc + c, 0)

};