function dirReduc(arr){
  let c = {"NORTH":"SOUTH", "EAST":"WEST","SOUTH":"NORTH", "WEST":"EAST" }
  let prev =[]
  
  while(!(arr.every((e,i)=> e === prev[i]))){
    prev = [...arr]
    arr.forEach((e,i)=> c[e] == arr[i+1] ? arr.splice(i,2) : null)
  }
    return arr
}