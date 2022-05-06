function sumStrings(a,b) { 
  let diff = a.length - b.length;
  let aArr = a.split('');
  let bArr = b.split('');
  
  if(diff > 0){ // a is larger than b  
    for(let i = 0; i < diff; i++){
      bArr.unshift(0)
    }
  }else if (diff < 0){
    for(let i = 0; i < Math.abs(diff); i++){
      aArr.unshift(0)
    }
  }
  
  let newArr = aArr.map((e, i) => +e + +bArr[i]).reverse()
  
  for(let j =0; j<newArr.length; j++){
    if(newArr[j] >= 10){
      newArr[j] -= 10
      if( newArr[j+1] || newArr[j+1] ===0){
        newArr[j+1] += 1
      }else{
        newArr.push(1)
      }
    }   
  }
  function removeZ(a){
    if(a[0]===0){
      a.shift()
      removeZ(a)
    }else{
      return a
    }
  }
  
  
  let finArr = newArr.reverse() //.map(e => (e || e===0) ? e : 1)
    console.log(removeZ(finArr))
  return finArr.join('')
}