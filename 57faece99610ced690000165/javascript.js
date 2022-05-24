function remove (string) {  
  let arr = string.split("")
 while(arr[arr.length-1] === "!"){
   arr.pop()
 }
  return arr.join("")
}