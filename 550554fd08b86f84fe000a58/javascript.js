function inArray(array1,array2){
  let arr = array1.filter(e=> array2.join(" ").includes(e))
  return [...new Set(arr)].sort()
  
}