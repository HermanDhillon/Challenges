function dashatize(num) {
  let arr = [...Math.abs(num)+""].map(e=> e%2 ? "-" + e + "-" : e).join("").split("").filter((e,i,a)=> !(e == "-" && a[i+1] == "-"))
  console.log(arr)
  if (arr[0] === "-") arr.shift()
  if (arr[arr.length-1] === "-") arr.pop()
 return  arr.join("")
}