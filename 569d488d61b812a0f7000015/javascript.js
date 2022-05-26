function dataReverse(data) {
  let arr = []
  let copyData= [...data]
  while(data.length > 0){
    arr.push(data.splice(0,8).join(","))
  }

  return copyData.length === 0 ?  [] : arr.reverse().join(",").split(",").map(e=> +e) 
}