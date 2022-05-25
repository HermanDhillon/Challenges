function isValidWalk(walk) {

  let table = {n: 1, s: -1, w: 0.5, e: -0.5}
  let x = walk.reduce((a,c) => a + table[c], 0)
 
  return walk.length === 10 && x === 0
}