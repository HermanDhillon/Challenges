function remove(s,n){
  let arr = s.split("")
 x=0
  for(let i = 0; i < arr.length ; i++){
    if(x === n){
      break
    }else if( arr[i] === "!"){
      arr.splice(i, 1, null)
      x++
    }
  }

  return arr.filter(e=> e!== null).join('')
}