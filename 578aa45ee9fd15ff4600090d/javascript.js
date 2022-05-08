function sortArray(arr) {
 let odds= arr.filter( (e,i) => e%2 ).sort((a,b) => a-b)
 let j = 0
 arr.forEach((e, i) => e%2 ? (arr[i]=odds[j], j++) : null)
 return arr
}