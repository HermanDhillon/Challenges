function sumOfDifferences(arr) {

let sortedArr = arr.sort((a,b) => b-a)
return arr.length === 0 ? 0 : sortedArr.reduce((a,c,i)=> a + (c - (arr[i+1] || 0)), 0) - sortedArr[arr.length-1]
}