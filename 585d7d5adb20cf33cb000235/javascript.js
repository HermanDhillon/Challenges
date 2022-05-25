function findUniq(arr) {
  let set = [...new Set(arr)]
  arr.splice(arr.indexOf(set[0]), 1) 
  arr.splice(arr.indexOf(set[1]), 1) 

  return   arr.indexOf(set[0]) === -1 ? set[0] : set[1]

  }
