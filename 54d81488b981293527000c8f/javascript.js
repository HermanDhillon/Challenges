function sumPairs(ints, s) {
// Does not work for big lists
//   let arr = []
//   ints.forEach((e,i) => ints.forEach((c,j) => (e+c == s && i!==j) ? arr.push([e, c]): null ))
//   arr = arr.slice(0, arr.length/2)
//   let iArr = arr.map(([e1,e2]) => ints.indexOf(e2, ints.indexOf(e1)+1)-ints.indexOf(e1))
//   let ind = iArr.indexOf(Math.min(...iArr))
//   return arr[ind]
  //-----------------------------------------------------------------------
  
  let set = new Set()
  for(let i =0; i<ints.length; i++){
    if(set.has(s-ints[i])){
    return [s-ints[i], ints[i]]
    } 
    set.add(ints[i])
  }
}