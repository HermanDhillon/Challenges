function incrementString (str) {
  let  numArr = str.split("").filter( e => !isNaN(+e))
  let num = +numArr.join("") + 1
  let numZ = numArr.length-String(num).length < 0 ? 0 : numArr.length-String(num).length
  let numStr =  "0".repeat(numZ) + num
  return str.slice(0,str.length-numArr.length) + numStr
}