function array(arr){
  let arr2 = arr.split(",")
  arr2.pop()
  arr2.shift()
  return arr2.join(" ") !== "" ? arr2.join(" ") : null

}
