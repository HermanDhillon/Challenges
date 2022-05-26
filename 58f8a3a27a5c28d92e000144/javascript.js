function firstNonConsecutive (arr) {
  console.log(arr)
  console.log("--------------------------------")
  for(let i = 1; i < arr.length-1; i++){
    if(arr.length === 0){
      return null
    }else if(arr[i]-arr[i-1] > 1){
      console.log(arr[i])
      console.log("=======================")

      return arr[i]
    }
  }
  return null
}