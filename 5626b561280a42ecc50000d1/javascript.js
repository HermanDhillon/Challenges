function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i<= b; i++ ){
    let num = String(i).split('').reduce((a,c,i) => a + c**(i+1) , 0) 
    if(i <10){
      arr.push(i)
    }else if(num === i){
      arr.push(num)
    }
  }
  return arr
}
