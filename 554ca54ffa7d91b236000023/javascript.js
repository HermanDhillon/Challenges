function deleteNth(arr,n){
  let set = [...new Set(arr)]

  for(let j=0; j<set.length; j++){
    let y = 0
    for(let k=0; k<arr.length; k++){
      if(set[j]===arr[k]){
        y++
        if(y>n){
          arr.splice(k,1, 'del')
        }
      }
    }
  }
  return arr.filter(e=>e!=='del')
}