function findMultiples(integer, limit) {
  let arr = [integer]
  for(let i =integer*2; i<=limit; i+=integer){
    arr.push(i)
  }
  return arr
}
