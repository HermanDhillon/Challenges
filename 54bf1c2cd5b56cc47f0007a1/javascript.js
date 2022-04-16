function duplicateCount(text){
 let arr = text.toLowerCase().split('')
 return [...new Set(arr.filter((e,ind) => arr.indexOf(e, ind+1) !== -1))].length

 
}