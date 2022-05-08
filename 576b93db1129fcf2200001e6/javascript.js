function sumArray(array) {
if(!array || array.length < 1){
  return 0
}
array.splice(array.indexOf(Math.max(...array)),1)
array.splice(array.indexOf(Math.min(...array)),1)
return array.reduce((a, c) => a + c, 0 )
}