function count (string) {  
  let ndArr = [...new Set(string.split(''))]
  let strObj = {}
  ndArr.forEach(i =>strObj[i] = string.split("").filter(e => e === i ).length)
  
  return strObj;
}