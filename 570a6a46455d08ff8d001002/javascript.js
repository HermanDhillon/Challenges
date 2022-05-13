function noBoringZeros(n){
  let arr = (n + "").split('')
  let copy = [...arr]
  console.log(arr)
  for(let i = arr.length-1; i<arr.length; i--){
    if(arr[i] ==="0"){
       copy.pop()
    }else break
  }
  
  return +copy.join("") 
  }
