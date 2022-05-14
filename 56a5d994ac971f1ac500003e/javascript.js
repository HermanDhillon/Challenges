function longestConsec(strarr, k) {
  if( strarr.length === 0 || k > strarr.length || k <= 0){
    return ''
  }
  let count = []
    for(let i =0 ; i < strarr.length ; i++){
      count.push((strarr.slice(i,i+k).join('')).length)
    }
    let ind = count.indexOf(Math.max(...count))
  return  strarr.slice(ind,ind+k).join('')
}